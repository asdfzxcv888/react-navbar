import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import { AppProvider } from './context'

function App() {
  return (
    <>
    <AppProvider></AppProvider>
    
    <Home></Home>
      <Modal></Modal>
      <Sidebar></Sidebar>

    
     
    </>
  )
}

export default App
