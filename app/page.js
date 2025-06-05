// app/page.js
"use client";

import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      {/* Background is handled purely by CSS on .landingContainer */}

      {/* Main Content: Brand & Navigation */}
      <div className={styles.contentWrapper}>
        <div className={styles.brandContainer}>
          {/* Replaced .glassCard div with Image for charchives-rectangle.png */}
          <Image
            src="/charchives-rectangle.png"
            alt="charchives background"
            width={800} // Set an appropriate width (adjust as needed)
            height={200} // Set an appropriate height (adjust as needed)
            className={styles.charchivesBrandImage} // New class for styling this image
            unoptimized={true}
          />
      
        </div>

        <nav className={styles.mainNav}>
          <Link href="/projects" className={styles.navItem}>
            {/* Projects Icon PNG */}
            <Image
              src="/projects.png"
              alt="Projects"
              width={160}
              height={160}
              unoptimized={true}
            />
          </Link>

          <Link href="/about" className={styles.navItem}>
            {}
            <Image
              src="/about-me.png"
              alt="About Me"
              width={160}
              height={160}
              unoptimized={true}
            />
          </Link>

          <Link href="/contact" className={styles.navItem}>
            {/* Contacts Icon PNG */}
            <Image
              src="/contacts.png"
              alt="Contacts"
              width={160}
              height={160}
              unoptimized={true}
            />
          </Link>
        </nav>
      </div>
    </div>
  );
}