import React, { useReducer } from "react";

const Counter = () => {
    const reducer = (state, action) => {
        if(action.type === "INCREMENT") {
            return {count: state.count + 1};
        };

        if(action.type === "DECREMENT") {
            if(state.count === 0) {
                return state;
            };
            return {count: state.count - 1};
        };
        
        if(action.type === "RESET") {
            return {count: 0};
        }

    };

    const [value, dispatch] = useReducer(reducer,{count: 0});

    const handleClick = (type) => {
        dispatch(type);
    };

    return (
        <div>
            <p>My Counter</p>
            <p>{value.count}</p>
            <button onClick={() => handleClick({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => handleClick({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => handleClick({ type: "RESET" })}>Reset</button>
        </div>
    );
};

export default Counter;