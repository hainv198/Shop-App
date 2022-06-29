import React, { useState } from 'react';
import './Product.css';
export default function Product() {
    const [cart, setCart] = useState([]);
    return(
        <div className="wrapper">

            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: 0</div>
            <div className="product">
                <span role="img" aria-label="ice cream">🍦</span>
            </div>
            <button>Add</button>
            <button>Remove</button>
        </div>
    )
}
