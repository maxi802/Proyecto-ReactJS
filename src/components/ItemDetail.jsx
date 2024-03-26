import React, { useState } from 'react'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({item}) => {

  const [cantidad,setCantidad]=useState(1);
  const handelRestar = () => {
      cantidad > 1 && setCantidad(cantidad-1);
  }
  const handelSumar = () => {
      cantidad < item.stock && setCantidad(cantidad+1);
  }
  const handleAgregar= () => {
    console.log({...item,cantidad});
}
  return (
    <div className='container'>
        <div className='producto-detalle'>
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className='titulo'>{item.titulo}</h3>
                <p className='descripcion'>{item.descripcion}</p>
                <p className='categoria'>Categoria: {item.categoria}</p>
                <p className='precio'>${item.precio}</p>
                <ItemCount cantidad={cantidad} handelSumar={handelSumar} handelRestar={handelRestar} handleAgregar={handleAgregar}/>
            </div>
        </div>
    </div>
  )
}
