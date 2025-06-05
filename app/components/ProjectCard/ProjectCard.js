// app/components/ProjectCard/ProjectCard.js
import Image from 'next/image'; // Import Next.js Image component for optimized images
import Link from 'next/link';
import styles from './ProjectCard.module.css';

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  technologies, // This will be an array of strings
  websiteLink,
}) {
  return (
    <div className={styles.cardContainer}>
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            width={400} // Adjust width as per your image and design
            height={250} // Adjust height as per your image and design
            className={styles.projectImage}
            priority // Use priority for images above the fold for better LCP
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <p className={styles.projectDescription}>{description}</p>
        {technologies && technologies.length > 0 && (
          <p className={styles.projectTechnologies}>
            {technologies.join(', ')} {/* Joins array elements with a comma */}
          </p>
        )}
        {websiteLink && (
          <Link href={websiteLink} className={styles.websiteLink} target="_blank" rel="noopener noreferrer">
            Click here to go to the website
          </Link>
        )}
      </div>
    </div>
  );
}