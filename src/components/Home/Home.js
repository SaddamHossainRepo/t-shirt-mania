import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from './../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = tShirt =>{
        const exists = cart.find(ts => ts._id === tShirt._id);
        if(exists){
            alert('t-shirt already added');
        }
        else{
            const newCart = [...cart, tShirt];
            setCart(newCart);
            // alert('successfully added')
        } 
    }

    const handleRemoveItem = tshirt =>{
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tShirt => <TShirt
                        key={tShirt.id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;