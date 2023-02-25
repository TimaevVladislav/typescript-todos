import React from 'react'
import {Navigation} from "./components/Navigation"
import {Route, Routes} from "react-router-dom"
import {Home} from "./pages/Home"
import Info from "./pages/Info"


export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <Info /> } />
      </Routes>
    </>
  )
}


