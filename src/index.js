import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
Punto de entrada del proyecto, que monta el componente App en el DOM.

React.StrictMode: Es un wrapper que ayuda a detectar problemas potenciales en la aplicación.
ReactDOM.render: Renderiza el componente App en el elemento root de index.html

*/