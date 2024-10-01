import React from 'react';
import Navbar from '../../components/Navbar';

function Predictions() {
  return (
    <div className="predictions">
 <Navbar />
      <h2>Predicciones</h2>
      <div>
        <h4>Fecha Actual:</h4>
        <p>Muestra la fecha del día.</p>
        <h4>Predicciones Disponibles: </h4>
        <p>Un indicador que muestra cuántas predicciones quedan.</p>
        <h4>Sección de Partidos por Día:</h4>  
        <h5>Lista de Partidos Actuales: Tarjetas o listas con los partidos del día, que incluyen:</h5>
        <ul>
          <li>Nombre de los equipos.</li>
          <li>Hora del partido.</li>
          <li>Opción para hacer una predicción.</li>
          <li>Multiplicador correspondiente.</li>
          <li>Opción para ver estadísticas.</li>
        </ul>
        <h4>
        Sección de Apuestas Combinadas:</h4>
        <p>Botón para crear una apuesta combinada.</p>
        <h4>Predicciones Futuras</h4>
        <p>Calendario o Vista de Lista: Permite al usuario seleccionar partidos de días futuros.</p>
        <h4>Buscador de Eventos</h4>
        <p>Campo de Búsqueda: Permite a los usuarios buscar partidos o eventos específicos.</p>
      </div>
    </div>
  );
}

export default Predictions;
