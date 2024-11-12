import React, { useState } from 'react';

function App() {
  const [texto, setTexto] = useState("");


  const contarVocales = (cadena) => {
    const vocales = cadena.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);
    return vocales ? vocales.length : 0;
  };


  const manejarClick = () => {
    const cantidadVocales = contarVocales(texto);
    alert(`Cantidad de vocales: ${cantidadVocales}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contador de Vocales</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe aquí..."
      />
      <button onClick={manejarClick}>Contar Vocales</button>
    </div>
  );
}

export default App;
