import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Waki Predicciones</h1>
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/predictions">Predicciones</Link>
        <Link to="/profile">Mi Perfil</Link>
        <Link to="/divisiones">Divisiones</Link>
      </div>
    </nav>
  );
}

export default Navbar;
/*Un componente de barra de navegación simple.
Link: Se usa para navegar dentro de la aplicación sin recargar la página.
Navbar: Muestra los enlaces principales a las distintas páginas de la app.


*/