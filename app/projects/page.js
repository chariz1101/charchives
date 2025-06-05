// app/projects/page.js

import Link from 'next/link';
import Header from '../components/Header/Header.js';
import ProjectCard from '../components/ProjectCard/ProjectCard.js'; // Import the new ProjectCard component
import styles from './projects.module.css';

// Define your project data here
const projectsData = [
  {
    id: 1,
    title: "Movie Recommendation Application",
    description: "A comprehensive movie recommendation system built to provide personalized movie suggestions based on user preferences. This application leverages advanced algorithms to deliver an intuitive and engaging user experience, making movie discovery effortless and enjoyable. Users can explore a vast library of films and receive tailored recommendations.",
    imageUrl: "/Polygon 1.png", // <--- IMPORTANT: Create an 'images' folder in your 'public' directory and place the image there.
    imageAlt: "Movie Recommendation System Screenshot",
    technologies: ["Python", "Figma", "Dart", "Flutter"],
    websiteLink: "https://example.com/movie-app", // Replace with actual link
  },
  {
    id: 2,
    title: "Portfolio Website Design",
    description: "Designed and developed a modern, responsive portfolio website to showcase various projects and skills. The site features a clean user interface, interactive elements, and a focus on visual presentation to highlight creative and technical abilities. Optimized for performance and accessibility across all devices.",
    imageUrl: "/Polygon 1.png", // <--- IMPORTANT: Add another image here
    imageAlt: "Portfolio Website Screenshot",
    technologies: ["Next.js", "React", "CSS Modules", "Vercel"],
    websiteLink: "https://example.com/portfolio", // Replace with actual link
  },
  // Add more project objects here as needed
];


export default function ProjectsPage() {
  return (
    <div className={styles.projectsPageContainer}>
      <Header /> {/* Your sticky header */}

      <div className={styles.projectsContent}>
        
        {/* Map over your projectsData to render ProjectCard components */}
        <div className={styles.projectsGrid}> {/* Use a grid or flex container for cards */}
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