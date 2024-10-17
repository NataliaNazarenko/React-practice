import { useNavigate } from "react-router-dom";
import { counterSlice } from "../../redux/counter/counterSlice"
import { useState } from "react";

export default function About() {
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

    const handlerIncrement = () => {
        setCounter((prevState) => prevState + 1); 
    };

    const handlerDecrement = () => {
        if (counter === 0) {
            return;
        };

        setCounter((prevState) => prevState - 1); 
    };

    const handlerIncrementByAmount = (amount) => {
        setCounter((prevState) => prevState + amount);
    };
    
    return <>
        <h2>About Component</h2>
        <button onClick={() => navigate('/')}>Go HomePage</button>
        <p>Counter: {counter}</p>
        <button onClick={handlerIncrement}>Increment</button>
        <button onClick={handlerDecrement}>Decrement</button>
        <button onClick={() => handlerIncrementByAmount(5)}>Increment by 5</button>
        </>;
}