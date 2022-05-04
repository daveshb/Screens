import React from "react";
import { Funciones } from "../func/Funciones";

export const ScreensControl = () => {
  const { actualizaCliente } = Funciones();

  const handleclick = () => {
    actualizaCliente({
      urlVideo:
        "https://sigdeletras.com/images/blog/202004_react_leaflet/react.png",
    });
  };

  const handleclick2 = () => {
    actualizaCliente({
      urlVideo:
        "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
    });
  };

  return (
    <>
      <div>Vista de ScreensControl</div>

      <button onClick={handleclick}>REACT</button>
      <button onClick={handleclick2}>PAISAJE</button>
    </>
  );
};
