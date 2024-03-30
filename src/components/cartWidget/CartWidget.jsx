import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const CartWidget =() => {

    const {cantidadEnCarrito} = useContext(CartContext);
    return (
        <div>
            <Link to="/carrito" className='menu-link'>
            <img className="cart" src="../imagenes/carrito.png" alt="carrito" />
            <span className="badge">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}
export default CartWidget