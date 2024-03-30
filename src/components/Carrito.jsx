import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Carrito = () => {
    const {carrito,precioTotal,vaciarCarrito}=useContext(CartContext);
    const handleVaciar = () =>{
        vaciarCarrito();
    }

  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h3>{prod.titulo}</h3>
                    <p>Precio Unitario:${prod.precio}</p>
                    <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                    <p>Cantidad:{prod.cantidad}</p>
                </div>       
            ))
        }
        {
            carrito.length > 0 ?
            <>
                <h2>Precio Total:${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar Carrito</button>
            </> : 
            <h2>El carrito esta vacío</h2>
        }
        
    </div>
    
  )
}
