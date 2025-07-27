
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Manager from './components/Manager'



function App() {

  return (
    <>
      <Navbar />
      {/* <div className='min-h-[80vh]'> */}
        <Manager />
      {/* </div> */}
      <Footer />
    </>
  )
}

export default App