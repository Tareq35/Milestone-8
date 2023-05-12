import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = ({ cart, clearCart }) => {
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            <button><Link to='/orders'>Review Order</Link></button>
        </div>
    );
};

export default Cart;