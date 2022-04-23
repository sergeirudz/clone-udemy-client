import React from 'react';
import Link from 'next/link';
import styles from './TopNav.module.scss';
import Image from 'next/image';
import * as Icons from '@heroicons/react/outline'; // import like this is its easier to find new icons
import CategoriesMenu from '@components/CategoriesMenu/CategoriesMenu';

const TopNav = () => {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <a>
          <Image
            src="/static/logo-udemy.svg"
            height={34}
            width={91}
            className={styles.logo}
            alt="Logo"
          />
        </a>
      </Link>
      <CategoriesMenu />
      <div>Search for anything</div>
      <div>Udemy Business</div>
      <div>Teach on Udemy</div>
      <Icons.ShoppingCartIcon height={24} width={24} />
      <div>Log in</div>
      <div>Sign up</div>
      <Icons.GlobeAltIcon height={20} width={20} />
    </div>
  );
};

export default TopNav;
