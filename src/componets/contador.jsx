import React, { useState, useEffect } from "react";

function ContadorAnimado({ valorFinal }) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    let intervalo;
    if (contador < valorFinal) {
      intervalo = setInterval(() => {
        setContador((prev) => {
          if (prev + 500000 >= valorFinal) {
            clearInterval(intervalo);
            return valorFinal;
          }
          return prev + 500000;
        });
      }, 0.0000001); // Velocidad de conteo
    }
    return () => clearInterval(intervalo);
  }, [contador, valorFinal]);

  return <h2>{contador}</h2>;
}

export default ContadorAnimado;