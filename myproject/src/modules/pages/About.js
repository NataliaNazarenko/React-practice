import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from "../../redux/counter/counterSlice";

export default function About() {
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter.value);
    const navigate = useNavigate();

    const handlerIncrement = () => {
       dispatch(increment());
    };

    const handlerDecrement = () => {
        dispatch(decrement());
    };

    const handlerIncrementByAmount = (amount) => {
        dispatch(incrementByAmount(amount));
    };
    
    return <>
        <h2>About Component</h2>
        <button onClick={() => navigate('/')}>Go HomePage</button>
        <p>Counter: {counterValue}</p>
        <button onClick={handlerIncrement}>Increment</button>
        <button onClick={handlerDecrement}>Decrement</button>
        <button onClick={() => handlerIncrementByAmount(5)}>Increment by 5</button>
        </>;
}