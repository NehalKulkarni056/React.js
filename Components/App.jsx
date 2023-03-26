import React from 'react'
import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import About from './Components/About';
import PageNotFound from './Components/PageNotFound';

const App = () => {
  return (
    <div>
      <Router>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App