import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {useContext} from 'react'
import { AppContext } from './context'
const Modal = () => {

  const {isModalOpen,isSidebarOpen,openModal,openSidebar,closeSidebar,closeModal}=useContext(AppContext)
  return<>
  <div className={isModalOpen?'modal-overlay show-modal  ':'modal-overlay '}>
    <div className='modal-container'>
    <h2>Modal</h2>
   <button className='close-modal-btn' onClick={()=>{closeModal()}}><FaTimes></FaTimes></button>
  
    </div>
  </div>
   
  </>
}

export default Modal
