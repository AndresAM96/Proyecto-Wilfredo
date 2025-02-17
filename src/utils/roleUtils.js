export const isAdmin = (user) => {
    // Determina si el usuario tiene rol de administrador
    return user && user.role === 'admin';
  };
  
  export const isUser = (user) => {
    // Determina si el usuario tiene rol de usuario estándar
    return user && user.role === 'user';
  };