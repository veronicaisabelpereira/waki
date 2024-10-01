
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Divisioness from './pages/user/Divisiones';
import Login from './pages/user/Login';
import Predictions from './pages/user/Predicciones';
import Profile from './pages/user/Perfil';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Divisiones from './pages/user/Divisiones';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/divisiones" element={<Divisiones />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
/*

Define las rutas principales de la aplicación 
y establece la estructura básica.

BrowserRouter y Routes: Se usan para definir las rutas de la aplicación.
Navbar y Footer: Componentes reutilizables que se mostrarán en cada página.
*/