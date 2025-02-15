# Brontisandwich

Este proyecto es el **frontend** de un sistema de inventarios construido con **React**. Proporciona un conjunto de vistas y componentes para gestionar usuarios, productos, clientes, ventas y proveedores, haciendo uso de rutas protegidas y un sistema básico de autenticación.

## Tabla de Contenidos
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Uso](#uso)
- [Variables de Entorno](#variables-de-entorno)
- [Contribución](#contribución)
- [Licencia](#licencia)

---

## Características
- **Autenticación y Roles**: Permite inicio de sesión, registro y rutas protegidas.  
- **Rutas Protegidas**: Secciones del dashboard que requieren sesión activa.  
- **Gestión de Productos y Clientes**: Formularios y modales para CRUD (Create, Read, Update, Delete).  
- **Sistema de Buscador y Filtros**: Búsqueda y filtrado en tablas con paginación.  
- **Temas Claro/Oscuro**: Variables CSS para un fácil cambio de tema (light/dark).  
- **Lazy Loading**: Carga diferida de vistas para mejorar rendimiento.

---

## Tecnologías
- **React** (Create React App)
- **React Router** para la navegación
- **Axios** para peticiones HTTP
- **JavaScript (ES6+)** y **CSS**
- **Node.js** y **npm** (o **yarn**) para la gestión de dependencias

---

## Estructura de Carpetas
La carpeta `src/` está organizada de la siguiente forma:

src/ 
├── assets/ 
│ ├── fonts/ 
│ ├── icons/ 
│ ├── images/ 
│ └── styles/ 
│ ├── base/ 
│ ├── components/ 
│ ├── layout/ 
│ ├── themes/ 
│ └── global.css 
├── components/ 
│ ├── auth/ 
│ ├── data/ 
│ │ └── filters/ 
│ ├── modals/ 
│ ├── ui/ 
│ ├── Navbar.jsx 
│ └── Footer.jsx 
├── context/ 
├── hooks/ 
├── pages/ 
│ ├── auth/ 
│ ├── dashboard/ 
│ ├── errors/ 
│ └── Home.jsx 
├── services/ 
├── utils/ 
├── App.jsx 
├── main.jsx 
└── routes/ 
  ├── PrivateRoute.jsx 
  └── AdminRoute.jsx

- **assets**: Contiene estilos globales, imágenes, iconos y fuentes.  
- **components**: Componentes reutilizables (formularios, tablas, modales, etc.).  
- **context**: Contextos para la gestión de estados globales (por ejemplo, autenticación).  
- **hooks**: Custom Hooks para encapsular lógica repetitiva.  
- **pages**: Páginas o vistas principales.  
- **services**: Funciones para la comunicación con el backend (API REST).  
- **utils**: Funciones auxiliares o validaciones.  
- **routes**: Rutas protegidas (`PrivateRoute`, `AdminRoute`).  

---

## Requisitos
- **Node.js** (versión 14 o superior recomendada)
- **npm** (o **yarn**)

---

## Instalación
1. **Clona** este repositorio:
   ```bash
   git clone https://github.com/AndresAM96/Proyecto-Wilfredo.git

2. **Instala las dependencias**
    ```bash
    cd frontend
    npm install

3. **configura las Variables de Entorno si es necesario**

---

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

    npm start --Inicia la aplicación en modo desarrollo. Abre http://localhost:3000 para verla en el navegador.
    npm test --Ejecuta los test de la aplicación
    npm run build --Crea una version optimizada para producción en la carpeta "build/".
    serve -s buils --(requiere instalar serve o udar npx serve -s build) Inicia un servidor estático para servir los archivos de producción.

---

## Uso

1. Inicia la aplicación con npm start.
2. abre http://localhost:3000 en tu navegador
3. Regístrate (o inicia sesión con un usuario existente) para acceder al dashboard.
4. Explora las secciones de Productos, CLientes, Ventas, Proveedores, etc.

---

## Variables de Entorno

Si tu aplicación se conecta a un backend distinto al http://localhost:8080/api, define la variable REACT_APP_API_URL.
Crea un archivo .env en la raíz del proyecto:

REACT_APP_API_URL=http://midominio.com/api

Luego, en tus servicios (api.js), se leerá con:

baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api'

---

## Contribución

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu feature o corrección (git checkout -b feature/nueva-funcionalidad).
3. Realiza los cambios y sube tus commits (git commit -m 'Mi nueva funcionalidad').
4. Haz un push a tu rama (git push origin feature/nueva-funcionalidad).
5. Crea un Pull Request en GitHub para que revisemos tus cambios.

---

## Licencia

Este proyecto está bajo la MIT License. Siéntete libre de usarlo y modificarlo según tus necesidades.
