"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Pose = {
  yaw: number;
  shoulder: number;
  elbow: number;
  wrist: number;
  roll: number;
  grip: number;
  /** Horizontal screen position: 0 centres the arm, 0.25 puts it at 75% of
   *  the width. Applied as a camera offset so the arm keeps its framing. */
  x: number;
  /** Camera orbit around the arm, in radians. */
  orbit: number;
  camY: number;
};

// One pose per stop down the home page; scroll blends between them.
const POSES: Pose[] = [
  { yaw: -0.15, shoulder: 0.2, elbow: 1.15, wrist: 0.8, roll: 0, grip: 1, x: 0.27, orbit: 0.55, camY: 3.8 },
  { yaw: -0.5, shoulder: -0.55, elbow: 1.55, wrist: 0.9, roll: 1.2, grip: 0.2, x: 0.27, orbit: 0.9, camY: 4.6 },
  { yaw: 1.6, shoulder: 0.1, elbow: 0.4, wrist: -0.3, roll: 2.6, grip: 0.9, x: 0.25, orbit: 0.2, camY: 3.2 },
  { yaw: -1.2, shoulder: 0.75, elbow: 1.35, wrist: 1.1, roll: 3.6, grip: 0.1, x: 0.27, orbit: 1.15, camY: 5.2 },
  { yaw: 0.2, shoulder: -0.1, elbow: 0.25, wrist: 0.15, roll: 4.8, grip: 1, x: 0.24, orbit: 0.6, camY: 3.9 },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t);

function poseAt(s: number): Pose {
  const span = s * (POSES.length - 1);
  const i = Math.min(Math.floor(span), POSES.length - 2);
  const t = smooth(Math.min(Math.max(span - i, 0), 1));
  const a = POSES[i];
  const b = POSES[i + 1];
  const out = {} as Pose;
  for (const key of Object.keys(a) as (keyof Pose)[]) {
    out[key] = lerp(a[key], b[key], t);
  }
  return out;
}

/**
 * A six-axis arm built from primitives. It sits behind the home page in a
 * fixed canvas and moves through POSES as the page scrolls, with the pointer
 * nudging the turret and the camera.
 */
export default function RobotArm() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return; // No WebGL: the page reads fine without the arm.
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x070a0e, 10, 26);
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);

    // ---------------------------------------------------------- lighting
    scene.add(new THREE.HemisphereLight(0x9fdcff, 0x0a0d12, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(5, 9, 6);
    scene.add(key);
    const rim = new THREE.PointLight(0xff7a1a, 30, 14);
    rim.position.set(-4, 4, -3);
    scene.add(rim);
    const fill = new THREE.PointLight(0x38d6ff, 18, 12);
    fill.position.set(3, 1.5, 4);
    scene.add(fill);

    // --------------------------------------------------------- materials
    const metal = new THREE.MeshStandardMaterial({ color: 0x2a3644, metalness: 0.85, roughness: 0.32 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x10161d, metalness: 0.7, roughness: 0.45 });
    const shell = new THREE.MeshStandardMaterial({ color: 0xff7a1a, metalness: 0.35, roughness: 0.4 });
    const glow = new THREE.MeshBasicMaterial({ color: 0x38d6ff });
    const glowOrange = new THREE.MeshBasicMaterial({ color: 0xffb070 });

    const mesh = (geo: THREE.BufferGeometry, mat: THREE.Material) => new THREE.Mesh(geo, mat);
    const axle = (radius: number, length: number, mat: THREE.Material) => {
      const m = mesh(new THREE.CylinderGeometry(radius, radius, length, 36), mat);
      m.rotation.x = Math.PI / 2;
      return m;
    };
    const ledRing = (radius: number, z: number) => {
      const m = mesh(new THREE.TorusGeometry(radius, 0.022, 8, 64), glow);
      m.position.z = z;
      return m;
    };

    // --------------------------------------------------------------- arm
    const rig = new THREE.Group();
    scene.add(rig);

    const plinth = mesh(new THREE.CylinderGeometry(1.25, 1.45, 0.36, 56), dark);
    plinth.position.y = 0.18;
    rig.add(plinth);
    const plinthRing = mesh(new THREE.TorusGeometry(1.3, 0.025, 8, 96), glow);
    plinthRing.rotation.x = Math.PI / 2;
    plinthRing.position.y = 0.37;
    rig.add(plinthRing);

    const turret = new THREE.Group();
    turret.position.y = 0.36;
    rig.add(turret);
    const turretBody = mesh(new THREE.CylinderGeometry(0.78, 0.95, 0.55, 48), shell);
    turretBody.position.y = 0.27;
    turret.add(turretBody);
    const turretCap = mesh(new THREE.CylinderGeometry(0.55, 0.78, 0.18, 48), metal);
    turretCap.position.y = 0.63;
    turret.add(turretCap);

    const shoulder = new THREE.Group();
    shoulder.position.y = 0.95;
    turret.add(shoulder);
    shoulder.add(axle(0.42, 1.05, dark));
    shoulder.add(ledRing(0.3, 0.53), ledRing(0.3, -0.53));

    const upper = mesh(new THREE.BoxGeometry(0.46, 2.3, 0.62), shell);
    upper.position.y = 1.15;
    shoulder.add(upper);
    for (const z of [0.33, -0.33]) {
      const plate = mesh(new THREE.BoxGeometry(0.32, 1.7, 0.04), metal);
      plate.position.set(0, 1.15, z);
      shoulder.add(plate);
    }

    const elbow = new THREE.Group();
    elbow.position.y = 2.3;
    shoulder.add(elbow);
    elbow.add(axle(0.32, 0.82, dark));
    elbow.add(ledRing(0.22, 0.42), ledRing(0.22, -0.42));

    const fore = mesh(new THREE.BoxGeometry(0.34, 1.8, 0.4), metal);
    fore.position.y = 0.9;
    elbow.add(fore);
    const stripe = mesh(new THREE.BoxGeometry(0.36, 0.9, 0.42), shell);
    stripe.position.y = 0.75;
    elbow.add(stripe);

    const wrist = new THREE.Group();
    wrist.position.y = 1.8;
    elbow.add(wrist);
    wrist.add(mesh(new THREE.SphereGeometry(0.24, 32, 20), dark));

    const roll = new THREE.Group();
    wrist.add(roll);
    const flange = mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.2, 32), metal);
    flange.position.y = 0.22;
    roll.add(flange);
    const palm = mesh(new THREE.BoxGeometry(0.62, 0.16, 0.32), dark);
    palm.position.y = 0.38;
    roll.add(palm);
    const tip = mesh(new THREE.SphereGeometry(0.06, 16, 12), glowOrange);
    tip.position.y = 0.48;
    roll.add(tip);

    const fingers = [-1, 1].map((side) => {
      const f = new THREE.Group();
      f.position.y = 0.46;
      const finger = mesh(new THREE.BoxGeometry(0.07, 0.42, 0.26), shell);
      finger.position.y = 0.21;
      f.add(finger);
      const pad = mesh(new THREE.BoxGeometry(0.02, 0.18, 0.2), glow);
      pad.position.set(-side * 0.045, 0.3, 0);
      f.add(pad);
      roll.add(f);
      return { f, side };
    });

    // ---------------------------------------------------------- the floor
    const grid = new THREE.GridHelper(40, 80, 0x38d6ff, 0x1c2a36);
    const gridMat = grid.material as THREE.Material;
    gridMat.transparent = true;
    gridMat.opacity = 0.35;
    rig.add(grid);

    const pulse = mesh(
      new THREE.RingGeometry(1.5, 1.56, 96),
      new THREE.MeshBasicMaterial({ color: 0x38d6ff, transparent: true, side: THREE.DoubleSide }),
    );
    pulse.rotation.x = -Math.PI / 2;
    pulse.position.y = 0.01;
    rig.add(pulse);

    // Dust in the light: a slow drift of points around the arm.
    const dustGeo = new THREE.BufferGeometry();
    const count = 500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = Math.random() * 9;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    dustGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const dust = new THREE.Points(
      dustGeo,
      new THREE.PointsMaterial({ color: 0x8fe6ff, size: 0.035, transparent: true, opacity: 0.55, depthWrite: false }),
    );
    scene.add(dust);

    // ------------------------------------------------------------- input
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    let wide = true;
    const resize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      wide = w / h > 1.1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.fov = wide ? 34 : 46;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    // Scroll is smoothed so the arm eases between poses instead of snapping.
    let s = 0;
    const scrollTarget = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      return Math.min(Math.max(window.scrollY / max, 0), 1);
    };
    s = scrollTarget();

    const clock = new THREE.Clock();
    let raf = 0;

    const render = () => {
      const t = reduce ? 0 : clock.getElapsedTime();
      s = reduce ? scrollTarget() : lerp(s, scrollTarget(), 0.08);
      pointer.x = lerp(pointer.x, pointer.tx, 0.05);
      pointer.y = lerp(pointer.y, pointer.ty, 0.05);

      const p = poseAt(s);
      const idle = (a: number, f: number) => (reduce ? 0 : Math.sin(t * f) * a);

      turret.rotation.y = p.yaw + pointer.x * 0.5 + idle(0.06, 0.7);
      shoulder.rotation.z = p.shoulder + idle(0.05, 0.9);
      elbow.rotation.z = p.elbow + pointer.y * 0.2 + idle(0.07, 1.1);
      wrist.rotation.z = p.wrist + idle(0.1, 1.4);
      roll.rotation.y = p.roll + t * 0.25;
      const open = 0.06 + p.grip * 0.16;
      for (const { f, side } of fingers) f.position.x = side * open;

      rig.position.z = wide ? 0 : -1.5;
      // Shift the rendered frame, not the arm, so it sits right of the text.
      const w = renderer.domElement.width;
      const h = renderer.domElement.height;
      camera.setViewOffset(w, h, -w * (wide ? p.x : 0.2), 0, w, h);

      const radius = wide ? 13.5 : 14;
      const orbit = p.orbit + pointer.x * 0.12;
      camera.position.set(
        Math.sin(orbit) * radius,
        p.camY - pointer.y * 0.4,
        Math.cos(orbit) * radius,
      );
      camera.lookAt(0, 2.1, 0);

      const wave = (t * 0.45) % 1;
      pulse.scale.setScalar(1 + wave * 2.4);
      (pulse.material as THREE.MeshBasicMaterial).opacity = (1 - wave) * 0.6;
      dust.rotation.y = t * 0.02 + s * 1.5;
      dust.position.y = -s * 2;

      // Step back once the hero is gone so text in front stays readable.
      const hero = Math.min(window.scrollY / window.innerHeight, 1);
      el.style.opacity = String(wide ? 1 - hero * 0.72 : 0.4 - hero * 0.22);

      renderer.render(scene, camera);
    };

    const loop = () => {
      render();
      raf = requestAnimationFrame(loop);
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) loop();
    };

    if (reduce) {
      render();
      window.addEventListener("scroll", render, { passive: true });
    } else {
      loop();
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", render);
      document.removeEventListener("visibilitychange", onVisibility);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points || obj instanceof THREE.LineSegments) {
          obj.geometry.dispose();
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => m.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={host}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full"
    />
  );
}
