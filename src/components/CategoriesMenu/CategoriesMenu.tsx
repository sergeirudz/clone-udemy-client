import React from 'react';
import styles from './CategoriesMenu.module.scss';

const CategoriesMenu = () => {
  return (
    <nav>
      <button type="button" tabIndex={0} className={styles.button}>
        <span className={styles.buttonText}>
        Categories
        </span>
      </button>
    </nav>
  );
};

export default CategoriesMenu;
