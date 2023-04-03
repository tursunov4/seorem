import React, {  useState } from 'react'
import Suppliers from '../Suppliers/Suppliers'
import Clients from '../Clients/Clients'
function MainPage() {
    const [sideBar , setSidebar] = useState(false)
  
    const supClick =() =>{
       setSidebar(false)
    }
    const  clientClick =() =>{
        setSidebar(true)
    }
  return (
    <div className='d-flex'>
     <ul className='sidebar'>
        <li onClick={supClick}>Suppliers</li>
        <li onClick={clientClick}>Clients</li>
       </ul>
     
        <div className='user'>
            {
              sideBar ? <Clients/> :<Suppliers/>
            }
        </div>
    </div>
  )
}

export default MainPage