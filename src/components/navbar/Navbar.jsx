import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({showlogin,setShowlogin}) => {

    const [active,setActive]=useState('acceuil')
    const [change,setChange]=useState(false)

   

  return (

    <div className="navbar">
        <nav className="nav">
            <div className="logo">
          <h1>       <span>&#x1F37D;</span>Restaurant</h1>
            </div>

            <ul className={change?"links open":'links'}>
             <i class="fa-solid fa-xmark" id='close-icon' onClick={()=>setChange(false)}></i>
                <li onClick={()=>setActive("accueil")}><a href="#" className={active==="accueil" ? 'actif':''}>accueil</a></li>
                <li onClick={()=>setActive("menu")}><a href="#menu" className={active==="menu" ? 'actif':''}>menu</a></li>
                <li onClick={()=>setActive("galerie")}><a href="#galerie" className={active==="galerie" ? 'actif':''}>galerie</a></li>
                <li onClick={()=>setActive("contact")}><a href="#contact" className={active==="contact" ? 'actif':''}>contact</a></li>

                
         
                <button type="submit" className='btn0' onClick={()=>setShowlogin(true)} >rejoignez-nous</button>
         
            </ul>


            <div className="cart">
           <i class="fa-solid fa-cart-shopping" id='cart-icon'></i>
           <span>0</span>
            </div>

            <div className="icone">
             <i class="fa-solid fa-bars" id='menu-icon' onClick={()=>setChange(true)}></i>
            </div>
        </nav>
    </div>
  )
}

export default Navbar