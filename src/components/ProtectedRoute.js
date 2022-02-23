import { Outlet, Navigate } from 'react-router';

function ProtectedRoute() {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoute;
