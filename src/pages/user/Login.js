import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Crea una instancia de navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`User: ${username}, Password: ${password}`);

    navigate('/predictions');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
/*
useState: Se utiliza para manejar el estado del formulario.
handleSubmit: Al enviar el formulario, se muestra el usuario y contraseña en la consola.

*/