import './App.css'

import { Route,Routes } from 'react-router-dom'

import AboutUs from './Pages/AboutUs'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'


function App() { 

  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage/>}> Home </Route>
         <Route path="/about" element={<AboutUs/>}> Home </Route>
         <Route path="*" element={<NotFound/>}> Home </Route>
      </Routes>
    </>
  )
}

export default App
