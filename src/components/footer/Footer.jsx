import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id='contact'>
        <div className="first-row">
            <div className="link">
                 <div className="logo">
          <h1>       <span>&#x1F37D;</span>Restaurant</h1>
            </div>

            <ul>
                 <li ><a href="#" >accueil</a></li>
                <li ><a href="#menu">menu</a></li>
                <li ><a href="#galerie" >galerie</a></li>
                <li ><a href="#contact" >contact</a></li>
                
                </ul>
            </div>
        </div>

        <hr />
        <div className="second-row">

            <h3>nous suivre</h3>

            <div className="lien">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-whatsapp"></i>
            </div>
        </div>
        <hr />
        <div className="third-row">
            <p>&copy; copyright 2025 deserved to : <a href="#">Naimombwe Ebongue Salem</a></p>

        </div>
    </div>
  )
}

export default Footer