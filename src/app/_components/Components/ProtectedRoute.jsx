import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Replace this with your actual authentication check
  const isAuthenticated = localStorage.getItem('user'); // or however you track auth state
  
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
