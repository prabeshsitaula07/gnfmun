
import Navbar from '../Navbar/Navbar';
// import Footer from './Footer';
interface LayoutProps {
    children: React.ReactNode; // This explicitly types the 'children' prop
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    <>
        < Navbar/>
        <main>{children}</main>
        {/* <Footer /> */}
    </>
);

export default Layout;
