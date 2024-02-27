import React from 'react'
import { Item } from './Item'
export const ItemList = ({productos}) => {
  return (
    <div class="container">
        <h2 className='main-tittle'>Productos</h2>
        <div className='productos'>
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    </div>
    
  )
}
