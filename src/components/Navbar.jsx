import React from 'react'
import CartWidget from './cartWidget/CartWidget'
import { Link } from 'react-router-dom'


 const navbar = () => {
   return (
     <nav className='navbar'>
        <Link to="/"><img src="./imagenes/logo.jpg" alt="" className='logo'/></Link>
        <ul className='menu'>
            <li><Link to="/" className='menu-link'>Inicio</Link></li>
            <li><Link to="/nosotros" className='menu-link'>Nosotros</Link></li>
            <li><Link to="/productos" className='menu-link'>Servicios</Link></li>
            <li><Link to="/productos/espacio y ubicacion" className='menu-link'>Espacio Y Ubicacion</Link></li>
            <li><Link to="/productos/catering y alimentacion" className='menu-link'>Catering y Alimentacion</Link></li>
            <li><Link to="/productos/entretenimiento y animacion" className='menu-link'>Entretenimiento y Animación</Link></li>
            <li><Link to="/productos/decoracion y ambientacion" className='menu-link'>Decoración y Ambientación</Link></li>
            <li><Link to="/productos/servicios adicionales" className='menu-link'>Servicios Adicionales</Link></li>
            <li><Link to="/contacto" className='menu-link'>Contacto</Link></li>
            <li><CartWidget/></li>
        </ul>
     </nav>
   )
 }
 
 export default navbar 