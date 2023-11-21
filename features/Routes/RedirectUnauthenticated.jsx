import useAuth from '@/hooks/useAuth.js';
import { Navigate, Outlet } from 'react-router-dom';

const RedirectUnauthenticated = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated
    ? <Outlet/>
    : <Navigate to='/login' />;
};

export default RedirectUnauthenticated;
