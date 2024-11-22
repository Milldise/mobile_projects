import React, { useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import Order from './Order';

const ShowOrders = (props) => {
    return (
        <div>
            {props.orders.map(el => (
                <Order key = {el.id} item = {el} onDelete = {props.onDelete} onCount = {props.onCount}/>
            ))}
        </div>
    )
}

const ShowNothing = () => {
    return (
        <div>
            <h2>There is nothing</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    return(
        <header >
            <div className="header-container">
                <iframe class ="logo" width="150" height="90" src="https://lottie.host/embed/7841f03d-fc7c-4fa8-93d0-bb16a124c208/XXy2D3VYvD.json"></iframe>
                <ul className='nav'>
                
                <li><a href = "https://github.com/Milldise?tab=repositories">About us</a></li>
                <li>Streamlit</li>
                <li>Arizona</li>
                <li className = {`shopcart ${cartOpen && 'active'}`}><span><FaShoppingCart onClick = {() => setCartOpen(cartOpen=!cartOpen)}/></span></li>
                </ul>
            </div>

                {cartOpen && (  
                    <div className="basket">
                        {props.orders.length >0 ? ShowOrders(props) :ShowNothing()}
                            
                            
                    </div>
                )}

            
            <div className='presentation'></div>
        </header>


    )
}
