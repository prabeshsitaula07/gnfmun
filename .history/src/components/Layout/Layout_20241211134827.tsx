
import Navbar from '../Navbar/Navbar';
// import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        < Navbar/>
        <main>{children}</main>
        {/* <Footer /> */}
    </>
);

export default Layout;
