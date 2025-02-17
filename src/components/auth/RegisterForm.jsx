import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const { login } = useAuth(); // Para simplificar, se inicia sesión inmediatamente tras el registro
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Rol predeterminado

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de registro exitoso seguido de inicio de sesión
    const userData = { email, role };
    login(userData);
    navigate('/dashboard/inventory');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;