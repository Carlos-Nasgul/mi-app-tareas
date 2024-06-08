import React from "react";
import "./estilos/App.css";
import logoFreeCodeCamp from "./album-Imagenes/FreeCodeCamp_logo.png";
import LogoPortada from "./componentes/LogoPortada";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="App-Tareas">
      <LogoPortada
        src={logoFreeCodeCamp}
        className="logoFreeCodeCamp"
        alt="foto del logo de freeCodeCamp"
      />
      <div className="tareas-lista-pricipal">
        <h1>📝 Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
