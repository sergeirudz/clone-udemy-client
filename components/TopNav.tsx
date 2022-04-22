import React from 'react';
import Link from 'next/link';
import styles from './TopNav.module.scss';

const TopNav = () => {
  return (
    <nav className={styles.container}>
      <h1 className={styles.title}>NAV BAR</h1>
    </nav>
  );
};

export default TopNav;
