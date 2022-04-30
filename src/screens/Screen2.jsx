import React, { useContext } from "react";
import { MyContext } from "../context/Context";


export const Screen2 = () => {

    const {screen}= useContext(MyContext);


  
  return (
    <>
      <h1>Holaaaaaa</h1>
      <div>Screen2</div>

      
      <br/>
      <hr/>
      {screen}
    </>
  );
};
