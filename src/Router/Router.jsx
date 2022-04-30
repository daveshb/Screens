import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Screen1 } from '../screens/Screen1'
import { Screen2 } from '../screens/Screen2'
import { ScreensControl } from '../screens/ScreensControl'
import { Provider } from '../context/Provider'
import { Navbar } from './Navbar'


export const Router = () => {
  return (
    <Provider>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/control" element={<ScreensControl /> } />
      <Route path="/screen1" element={<Screen1 />} />
      <Route path="/screen2" element={<Screen2 />} />
    </Routes>
  </BrowserRouter>
  </Provider>
  
    
  )
}
