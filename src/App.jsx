// import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Choose from './Components/Choose';
import Articles from './Components/Articles';
import Footer from './Components/Footer';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar /> 
      <main>
        <Header />
        <Choose />
        <Articles />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
