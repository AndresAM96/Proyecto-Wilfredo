import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  return user && user.role === 'admin' ? children : <Navigate to="/unauthorized" />;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;