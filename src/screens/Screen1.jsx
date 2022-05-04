import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";
import { Funciones } from "../func/Funciones";

export const Screen1 = () => {

  const {obtenerClientes}= Funciones();
  const {get} = useContext(MyContext);

  useEffect(() => {
    obtenerClientes();
  }, [get]);
  
 
  return (
    <>
     <h1>Screen 1</h1>
   
   <br />
   <hr />
    { get && 
      <div>
      <img className="imagen" src={get[0].urlVideo} alt=""/>
      <img className="imagen" src={get[1].urlVideo2} alt=""/>
      </div>
      }
    </>
  )
}
