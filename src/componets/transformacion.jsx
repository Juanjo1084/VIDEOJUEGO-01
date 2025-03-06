import React, { useState, useEffect } from 'react';
import './transformations.css';

function Transformacion({ fuerza, transformations }) {
  const [transformacionActual, setTransformacionActual] = useState(transformations[0]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const nuevaTransformacion = transformations
      .filter((t) => fuerza >= t.ki)
      .reduce((prev, current) => (prev.ki > current.ki ? prev : current), transformations[0]);

    if (nuevaTransformacion.id !== transformacionActual.id) {
      setMensaje(`Tu personaje Ha ascendido de nivel, !Felicidades¡`);
      
      setTimeout(() => setMensaje(""), 3000);
    }
    setTransformacionActual(nuevaTransformacion);
  }, [fuerza, transformations, transformacionActual.id]);

  
  return (
    <div className="transformations">
      <p>Tu Personaje</p>
      <img src={transformacionActual.image} alt={transformacionActual.name} width="300px" />
      <h2>{transformacionActual.name}</h2>

      {/* Mostrar mensaje de ascenso si existe */}
      {mensaje && <div className="mensaje-transformacion"><p>{mensaje}</p></div>}
    </div>
  );
}

export default Transformacion;