// app/projects/page.js

import Link from 'next/link';
import Header from '../components/Header/Header.js';
import ProjectCard from '../components/ProjectCard/ProjectCard.js'; 
import styles from './projects.module.css';

const projectsData = [
  {
    id: 1,
    title: "FAMAS (Farm Management System)",
    description: "A comprehensive, multi-tenant farm management platform bridging traditional agriculture with modern engineering. Features include interactive geospatial mapping for farm boundaries, a secure Role-Based Access Control (RBAC) timesheet system, and real-time IoT telemetry utilizing MQTT and InfluxDB for live environmental monitoring.",
    imageUrl: "/famas-dashboard.png", // needs replacement
    imageAlt: "FAMAS Dashboard Screenshot",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "IoT (MQTT/InfluxDB)"],
    websiteLink: "#", 
  },
  {
    id: 2,
    title: "SMARTSENSE",
    description: "An innovative mobile application and thesis project designed to provide real-time transcription via AR glasses. The system utilizes multimodal inputs, leveraging audio and video processing for natural language transcription and lip-reading capabilities.",
    imageUrl: "/smartsense-app.png", // needs replacement
    imageAlt: "SMARTSENSE App Interface",
    technologies: ["Flutter", "Python", "TFLite", "OpenCV", "AR Glasses Integration"],
    websiteLink: "#", 
  },
  {
    id: 3,
    title: "TUON TA!",
    description: "An educational game developed in collaboration with Smart/PLDT designed to promote and teach the Hiligaynon language. The project features engaging 2D top-down pixel art and intuitive UI/UX design to create an immersive learning environment.",
    imageUrl: "/tuon-ta.png", // needs replacement
    imageAlt: "TUON TA! Gameplay Screenshot",
    technologies: ["Unity", "C#", "Figma", "UI/UX Design"],
    websiteLink: "#", 
  },
  {
    id: 4,
    title: "HIREWIRE",
    description: "A full-stack application tracking system that streamlines the job hunting process. It integrates directly with Gmail to provide automated application status updates and intelligent reminders, keeping users organized and informed.",
    imageUrl: "/hirewire-tracker.png", // needs replacement
    imageAlt: "HIREWIRE Tracker Interface",
    technologies: ["Next.js", "React", "Node.js", "Gmail API"],
    websiteLink: "#", 
  }
];

export default function ProjectsPage() {
  return (
    <div className={styles.projectsPageContainer}>
      <Header /> 

      <div className={styles.projectsContent}>
        <div className={styles.projectsGrid}> 
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              technologies={project.technologies}
              websiteLink={project.websiteLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}