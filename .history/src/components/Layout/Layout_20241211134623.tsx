
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        < Nav/>
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;
