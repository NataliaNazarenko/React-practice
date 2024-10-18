import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "../../redux/counter/counterSlice";

export default function About() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerIncrement = () => {
       dispatch(increment());
    };

    const handlerDecrement = () => {
        dispatch(decrement());
    };

    const handlerIncrementByAmount = (amount) => {
        dispatch(incrementByAmount(5));
    };
    
    return <>
        <h2>About Component</h2>
        <button onClick={() => navigate('/')}>Go HomePage</button>
        {/* <p>Counter: {counter}</p> */}
        <button onClick={handlerIncrement}>Increment</button>
        <button onClick={handlerDecrement}>Decrement</button>
        <button onClick={() => handlerIncrementByAmount(5)}>Increment by 5</button>
        </>;
}