import React from 'react';
import Navbar from '../Navbar/Navbar';

// Define the Layout component
interface LayoutProps {
  children: React.ReactNode; // This explicitly types the 'children' prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main> {/* Render the children here */}
      <footer>Footer content</footer>
    </div>
  );
};

export default Layout;
