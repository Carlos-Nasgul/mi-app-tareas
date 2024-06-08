// --> Componente para la foto de la portada <--

import React from "react";
import logoFreeCodeCamp from "../album-Imagenes/FreeCodeCamp_logo.png";

function LogoPortada() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={logoFreeCodeCamp}
        className="freecodecamp-logo"
        alt="logo de freeCodeCamp"
      />
    </div>
  );
}

export default LogoPortada;
