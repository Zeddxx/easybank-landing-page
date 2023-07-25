// import { useState } from 'react';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Choose from './Components/Choose';
import Articles from './Components/Articles';
import Footer from './Components/Footer';
import Shadow from './Components/Shadow';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [isActive, setIsActive] = useState(false);

  return (
    <BrowserRouter>
    <Shadow 
    isActive = {isActive}
    setIsActive = {setIsActive}
    />
      <Navbar 
      isActive = {isActive}
      setIsActive = {setIsActive}
      /> 
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
