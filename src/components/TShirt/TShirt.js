import React from 'react';
import './TShirt.css'
const TShirt = ({tShirt, handleAddToCart}) => {
    const {picture, name, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button onClick={()=>handleAddToCart(tShirt)}>Buy this</button>
        </div>
    );
};

export default TShirt;