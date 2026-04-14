import React from 'react';
import './App.css';

function App() {
  // Exemplo de código
  const [valor, setValor] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Calculadora de energia solar
        </p>
        {/* Exemplo de expressão corrigida */}
        <p>Valor: {valor}</p>
        <button onClick={() => setValor(valor + 1)}>Incrementar</button>
      </header>
    </div>
  );
}

export default App;