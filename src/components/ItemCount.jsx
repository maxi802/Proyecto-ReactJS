import React, { useState } from 'react'

export const ItemCount = ({cantidad, handelRestar,handelSumar,handleAgregar}) => {




  return (
    <div>
        <div className='item-count'>
            <button onClick={handelRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handelSumar }>+</button>
        </div>
        <button className='agregar-al-carrito' onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}
