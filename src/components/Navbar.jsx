import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to="/dashboard/inventory">Inventory</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/clients">Clients</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/sales">Sales</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/suppliers">Suppliers</NavLink>
            </li>
            {user.role === 'admin' && (
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            )}
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;