import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };

    return (
        <div className='container'>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={increment}>Start</button>
        </div>
    );
};

export default Home;