import React, { useContext } from 'react'
import { MyContext } from '../context/Context';

export const ScreensControl = () => {
  const {screen,setScreen}= useContext(MyContext);

  const handleclick = () => {
    setScreen(screen + 1);
  };

  console.log(screen);

  return (
    <>
    <div>Vista de ScreensControl</div>
    <button onClick={handleclick}>Tocame</button>
    {screen}
    </>
  )
}
