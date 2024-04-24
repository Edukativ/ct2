import React from 'react';

import "./product.css"
import { useState } from 'react';

const Product = (props) => {
    const [count, setCount] = useState(props.count);
    const [clicksCount, setClicksCount] = useState(0);

    const handleDecrement = (event) => {
        if (count > 0) {
            setCount(count - 1);

            event.stopPropagation();
        }
    };

    const handleIncrement = (event) => {
        if (count < 25) {
            setCount(count + 1);

            event.stopPropagation();
        }
    };

    if (count === 0 || clicksCount >= 2) {
        return null;
    }

    return (
        <div onClick={() => {setClicksCount(clicksCount + 1)}} className='rect'>
            <span className='name'>{props.name}</span>
            <span className='price'>Price: {props.price}</span>
            <div>
                <button onClick={handleDecrement}>-</button>
                <span className='count'>{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
};

export default Product;