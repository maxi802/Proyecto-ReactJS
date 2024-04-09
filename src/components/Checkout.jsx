import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const Checkout = () => {

const [pedidoId,setPedidoId]=useState("");

const {carrito,precioTotal,vaciarCarrito}=useContext(CartContext);

const { register , handleSubmit}=useForm();

const comprar = (data) => {
    const pedido={
        cliente:data,
        servicios:carrito,
        total:precioTotal()
    }
    console.log(pedido)
    const pedidosRef= collection(db,"pedidos")
    addDoc(pedidosRef,pedido)
    .then((doc)=>{
        setPedidoId(doc.id);
        vaciarCarrito();
    })
}
if(pedidoId){
    return (
        <div className="container">
            <h1 className="main-title">Muchas Gracias por tu Compra</h1>
            <p>Tu numero de pedido es:{pedidoId}</p>
        </div>
    )
}
  return (
    <div className="container">
    <h1 className="main-title">Finalizar Compra</h1>
    <form className="formulario" onSubmit={handleSubmit(comprar)}>

        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
        <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

        <button className="enviar" type="submit">Comprar</button>

    </form>
</div>
  )
}
