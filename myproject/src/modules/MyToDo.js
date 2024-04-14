import React, { useState } from 'react';

const MyToDo = () => {
    const [input, setInput] = useState('');
    const [item, setItem] = useState([]);

    const index = item.length;

    const onChangeHandler = (event) => {
        const value = event.target.value;
        console.log(value);
        setInput(value);
    };

    const onClickHandler = () => {
        console.log(input);
        if (input === '') {
            return;
        };
        setItem([...item, input]); // setItem(input);
        setInput('');
    };

const onEnterHandler = (event) => {
    if (event.key === 'Enter') {
        onClickHandler();
    };
};

    return (
        <>
            <p>My ToDo</p>
            <input onKeyDown={onEnterHandler} onChange={onChangeHandler} placeholder='Enter to do' value={input} type='text'></input>
            <p>{index}</p>
            <ul>
            {item.map((element, index) => <li key={`${element}${index}`} value={index}>{element}</li>)}
            </ul>
            <button type='button' onClick={onClickHandler}>Add</button>
        </>
    );
};

export default MyToDo;