export const isValidEmail = (email) => {
    // Comprueba si el email tiene un formato válido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const isValidPassword = (password) => {
    // Verifica que la contraseña tenga al menos 6 caracteres
    return password.length >= 6;
  };