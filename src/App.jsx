import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';

function App() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  )
}

export default App