import React from 'react'
import { Item } from './Item'
export const ItemList = ({productos,titulo}) => {
  return (
    <div class="container">
        <h2 className='main-tittle'>{titulo}</h2>
        <div className='productos'>
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    </div>
    
  )
}
