import React, { useEffect, useState } from 'react'
import { pedirDatos } from "../helpers/pedirDatos"
import { ItemList } from "./ItemList"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const[productos,setProductos]=useState([]);
    const categoria =useParams().categoria;
    const [titulo,setTitulo]=useState("Servicios");

    useEffect(() => {
      pedirDatos()
        .then((res) => {
          if(categoria){
            setProductos(res.filter((prod) => prod.categoria === categoria));
            setTitulo(categoria);
          } else{
            setProductos(res);
            setTitulo("Servicios");
          }
            
        })
    }, [categoria])
    
  return (
    <ItemList productos={productos} titulo={titulo}/>
  )
}

export default ItemListContainer