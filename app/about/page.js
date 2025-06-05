// app/projects/page.js

import Link from 'next/link';
import Header from '../components/Header/Header.js';
import ProjectCard from '../components/ProjectCard/ProjectCard.js'; // Import the new ProjectCard component
import styles from './projects.module.css';
import Image from 'next/image';


export default function AboutMePage() {
  return (
    <div className={styles.projectsPageContainer}>
      <Header /> {/* Your sticky header */}
      
      <div className={styles.infoContainer}>

        <div className={styles.aboutMePicture}>
        <Image
            src="/picture.png" // Replace with your actual image path
            alt="My Picture"
            width={400} // Set an appropriate width (adjust as needed)
            height={400} // Set an appropriate height (adjust as needed)
            className={styles.charchivesBrandImage} // New class for styling this image
            unoptimized={true}
          />
        </div>

        <div className={styles.aboutMeBG}>
        <Image
            src="/about-bg.png" // Replace with your actual image path
            alt="My Picture"
            width={540} // Set an appropriate width (adjust as needed)
            height={216} // Set an appropriate height (adjust as needed)
            className={styles.charchivesBrandImage} // New class for styling this image
            unoptimized={true}
          />
        </div>
      </div>

    </div>
  );
}