import React from 'react';
import Navbar from '../Navbar/Navbar';

// Define the Layout component
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
