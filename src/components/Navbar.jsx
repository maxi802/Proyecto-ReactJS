import React from 'react'
import CartWidget from './cartWidget/CartWidget'
import { Link } from 'react-router-dom'


 const navbar = () => {
   return (
     <nav className='navbar'>
        <Link to="/"><img src="./imagenes/logo.jpg" alt="" className='logo'/></Link>
        <ul className='menu'>
            <li><Link to="/" className='menu-link'>Inicio</Link></li>
            <li><Link to="#" className='menu-link'></Link>Nosotros</li>
            <li><Link to="#" className='menu-link'></Link>Servicios</li>
            <li><Link to="#" className='menu-link'></Link>Espacio Y Ubicacion</li>
            <li><Link to="#" className='menu-link'></Link>Catering y Alimentacion</li>
            <li><Link to="#" className='menu-link'></Link>Entretenimiento y Animación</li>
            <li><Link to="#" className='menu-link'></Link>Decoración y Ambientación</li>
            <li><Link to="#" className='menu-link'></Link>Servicios Adicionales</li>
            <li><Link to="#" className='menu-link'></Link>Contacto</li>
            <li><CartWidget/></li>
        </ul>
     </nav>
   )
 }
 
 export default navbar 