import { Outlet } from 'react-router';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => (
  <>
    <Navigation />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
