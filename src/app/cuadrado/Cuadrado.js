import { useState } from "react";

export default function Cuadrado() {
  const [estaClicado, setEstaClicado] = useState(false);

  const manejarClic = () => {
    setEstaClicado(!estaClicado);
  };

  return (
    <div className="contenedor">
      <div className="circulo-detras"></div> {/* Círculo detrás del cuadrado */}
      <div
        className={`cuadrado ${estaClicado ? 'clicado' : ''}`}
        onClick={manejarClic}
      ></div>
      <div className="circulo-delante"></div> {/* Círculo delante del cuadrado */}
    </div>
  );
}
