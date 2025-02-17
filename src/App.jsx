import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, memo } from 'react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './routes/PrivateRoute';
import AdminRoute from './routes/AdminRoute';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Inventory = lazy(() => import('./pages/dashboard/Inventory'));
const Clients = lazy(() => import('./pages/dashboard/Clients'));
const Sales = lazy(() => import('./pages/dashboard/Sales'));
const Suppliers = lazy(() => import('./pages/dashboard/Suppliers'));
const NotFound = lazy(() => import('./pages/errors/NotFound'));
const Unauthorized = lazy(() => import('./pages/errors/Unauthorized'));

const App = memo(() => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Rutas protegidas */}
            <Route path="/dashboard/inventory" element={<PrivateRoute><Inventory /></PrivateRoute>} />
            <Route path="/dashboard/clients" element={<PrivateRoute><Clients /></PrivateRoute>} />
            <Route path="/dashboard/sales" element={<PrivateRoute><Sales /></PrivateRoute>} />
            <Route path="/dashboard/suppliers" element={<PrivateRoute><Suppliers /></PrivateRoute>} />
            
            {/* Ruta solo para Admin */}
            <Route path="/admin" element={<AdminRoute><h1>Panel de Administración</h1></AdminRoute>} />

            {/* Páginas de error */}
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </AuthProvider>
  );
});

App.displayName = 'App';

export default App;