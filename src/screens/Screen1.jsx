import React, { useContext } from 'react'
import { MyContext } from '../context/Context';

export const Screen1 = () => {

  const {screen, setScreen}= useContext(MyContext);
  
  const handleclic2 = () => {
    setScreen(screen +2);
  }


  console.log(screen, 'desde Screen1');
  return (
    <>
    {screen}
    <button onClick={handleclic2}>AQUIII</button>
    </>
  )
}
