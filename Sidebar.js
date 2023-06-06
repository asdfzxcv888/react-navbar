import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import {useContext} from 'react'
import { AppContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen,openSidebar,closeSidebar}=useContext(AppContext)
  return <>
  <aside className={isSidebarOpen?'sidebar show-sidebar':'sidebar'}>
    <div className='sidebar-header'>
      <img src={logo} className ='logo'></img>
      <button className='close-btn' onClick={()=>{closeSidebar()}}><FaTimes></FaTimes></button>

    </div>
    <ul>
    {links.map((link)=>{
      return <li key={link.id}>
        <a href={link.url}>{link.text}' '{link.icon}</a>
      </li>

    })}
    </ul>
  </aside>
  </>
}

export default Sidebar
