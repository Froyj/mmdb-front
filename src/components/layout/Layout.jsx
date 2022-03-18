import { Outlet } from 'react-router';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = () => (
  <>
    <Navigation />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
