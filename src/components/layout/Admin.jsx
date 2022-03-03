import { Outlet } from 'react-router';
import Navigation from './Navigation';

const AdminLayout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

export default AdminLayout;
