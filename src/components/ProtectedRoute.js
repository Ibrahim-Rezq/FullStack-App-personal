import { Outlet, Navigate } from 'react-router';
import { useSelector } from 'react-redux';

function ProtectedRoute() {
  const signState = useSelector((state) => state.sign);
  return !signState.isSigndIn ? <Outlet /> : <Navigate to={-1} />;
}

export default ProtectedRoute;
