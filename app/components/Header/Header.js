// app/components/Header/Header.js
"use client"; // <--- Add this directive at the top

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname(); // Get the current path

  return (
    <header className={styles.headerContainer}>
      <div className={styles.brandName}>
        charchives.
      </div>
      <nav className={styles.navbarNav}>
        <Link 
          href="/" 
          className={`${styles.navLink} ${pathname === '/' ? styles.activeNavLink : ''}`}
        >
          home
        </Link>
        <Link 
          href="/projects" 
          className={`${styles.navLink} ${pathname === '/projects' ? styles.activeNavLink : ''}`}
        >
          projects
        </Link>
        <Link 
          href="/about" 
          className={`${styles.navLink} ${pathname === '/about' ? styles.activeNavLink : ''}`}
        >
          about me
        </Link>
        <Link 
          href="/contact" 
          className={`${styles.navLink} ${pathname === '/contact' ? styles.activeNavLink : ''}`}
        >
          contacts
        </Link>
      </nav>
    </header>
  );
}