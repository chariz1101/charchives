// components/ProjectCard.js
"use client"; // <--- Add this line at the very top

import styles from './ProjectCard.module.css';
import { useState } from 'react';

const ProjectCard = ({ project, type = 'default' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const commonContent = (
    <>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.projectLinks}>
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
            View Live
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            GitHub
          </a>
        )}
      </div>
    </>
  );

  const renderCardContent = () => {
    switch (type) {
      case 'compact':
        return (
          <div className={styles.compactCard}>
            <span className={styles.compactTitle}>{project.title}</span>
            {isHovered && <p className={styles.compactDescription}>{project.description.substring(0, 70)}...</p>}
          </div>
        );
      case 'detailed':
        return (
          <div className={styles.detailedCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            {commonContent}
          </div>
        );
      case 'hover-reveal':
        return (
          <div className={styles.hoverRevealCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.overlay}>
              {commonContent}
            </div>
          </div>
        );
      case 'floating-grid':
        return (
            <div className={styles.floatingGridCard}>
                {commonContent}
            </div>
        )
      default: // 'default' type
        return (
          <div className={styles.defaultCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            {commonContent}
          </div>
        );
    }
  };

  return (
    <div
      className={styles.projectCardWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderCardContent()}
    </div>
  );
};

export default ProjectCard;