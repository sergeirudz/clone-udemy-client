import React from 'react';
import Footer from './Footer';
import TopNav from './TopNav';

interface LayoutProps {
  children: React.ReactNode;
}
/* 
TS doc. https://dev.to/fromaline/jsxelement-vs-reactelement-vs-reactnode-2mh2
*/

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <TopNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
