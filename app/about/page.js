import Link from 'next/link';
import Header from '../components/Header/Header.js';
import styles from './projects.module.css';
import Image from 'next/image';


export default function AboutMePage() {
  return (
    <div className={styles.projectsPageContainer}>
      <Header />

      <div className={styles.infoContainer}>

        <div className={styles.aboutMePicture}>
          <Image
            src="/picture.png"
            alt="My Picture"
            width={400}
            height={400}
            unoptimized={true}
          />
        </div>

        <div className={styles.aboutMeBG}>
          <Image
            src="/about-bg.png"
            alt="About Me Background"
            width={540}
            height={216}
            unoptimized={true}
          />
          <div className={styles.aboutMeTextOverlay}>
            <h2>
              Hi! I’m <span className={styles.highlightName}>Chariz Dianne D. Falco</span>!
            </h2>

            <p>I’m a Computer Science student majoring in <span className={styles.highlightPurple}>Artificial Intelligence</span> at West Visayas State University. I’m passionate about building innovative tech solutions, especially those involving <span className={styles.highlightBlue}>robotics</span>, <span className={styles.highlightBlue}>machine learning</span>, and <span className={styles.highlightBlue}>web development</span>.</p>
          </div>
        </div>

      </div>

      {/* New sections added below */}
      <div className={styles.sectionsContainer}>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          {/* Technical Skills */}
          <p className={styles.skillCategoryTitle}>🧠 Technical Skills</p>
          <ul className={styles.skillCategory}>
            <li>Programming Languages: Python, C++, Java</li>
            <li>Frameworks & Tools: TensorFlow, Keras, OpenCV, MS Office Suite</li>
            <li>Focus Areas: Machine Learning, Data Analysis, Robotics, Web Development</li>
          </ul>

          {/* Languages */}
          <p className={styles.skillCategoryTitle}>🌐 Languages</p>
          <ul className={styles.skillCategory}>
            <li>English (Fluent)</li>
            <li>Filipino (Native)</li>
            <li>Korean (Basic Conversational)</li>
          </ul>

          {/* Laboratory Skills */}
          <p className={styles.skillCategoryTitle}>🔬 Laboratory Skills</p>
          <ul className={styles.skillCategory}>
            <li>Robotics Assembly and Testing</li>
            <li>AI/ML Model Data Collection & Analysis</li>
            <li>Scientific Research & Data Documentation</li>
          </ul>
        </div>

        <div className={styles.leadershipSection}>
          <h3 className={styles.sectionTitle}>Leadership & Activities</h3>
          <ul className={styles.activitiesList}>
            <li>President, CYB Robotics Organization (2024-Present)</li>
            <li>Representative, CIPHER BSCS 3-A (2024-Present)</li>
            <li>Secretary, CICT Student Council (2023-2024)</li>
            <li>Chairperson, CICT Junior Student Council (2022-2023)</li>
            <li>Editor-in-Chief, The Script Publication (2021-2022)</li>
          </ul>
        </div>

        <div className={styles.awardsSection}>
          <h3 className={styles.sectionTitle}>Awards & Recognition</h3>
          <ul className={styles.awardsList}>
           <li>🏆 1st Place, Short Film Documentary Contest (2022)</li>
            <li>🥈 2nd Place, Math Quiz Bee - Battle of the Brains (2022)</li>
            <li>🎙️ Most Promising Broadcaster, PM NegoTalk Youth Talk (2021)</li>
            <li>🎨 Best UI Production, Panitikang Journalism Summit (2021)</li>
            <li>🏅 IWAG Awardee, Philippine Information Agency (2022)</li>
            <li>🤝 Ambassador for Leadership & Youth Empowerment, Pathways (2022)</li>
         </ul>
        </div>
      </div>
    </div>
  );
}