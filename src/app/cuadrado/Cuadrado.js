import { useState } from "react";

export default function Cuadrado(){
  const [estaClicado, setEstaClicado] = useState(false)

  const manejarClic = () => {
    setEstaClicado(!estaClicado);
  };

  return (
    <div className="contenedor">
      <div
        className={`cuadrado ${estaClicado ? 'clicado' : ''}`}
        onClick={manejarClic}
      >

      </div>
    </div>
  );
};
