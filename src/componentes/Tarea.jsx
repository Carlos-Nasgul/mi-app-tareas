// --> Componente 'Mis Tareas' --> <Tarea />

import React from "react";
import "../estilos/Tarea.css"; // Importo el estilo de su componente.
import { AiOutlineCloseCircle } from "react-icons/ai"; // Importo el icono desde React-icons

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;
