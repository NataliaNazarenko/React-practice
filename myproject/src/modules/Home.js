import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState + 1)
    };

    const decrement = () => {
        if (count === 0) {
            return;
        };

        setCount((prevState) => prevState - 1)
    };

    return (
        <div className='container'>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Home;