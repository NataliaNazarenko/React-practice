import {useState} from 'react';

export const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return {counter, increment, decrement};
};