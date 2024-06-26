import React, { useState } from 'react';
import classNames from 'classnames';
import './MyToDo.css'

const MyToDo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([
        { id: 1, name: 'Todo 1' },
        { id: 2, name: 'Todo 2' },
        { id: 3, name: 'Todo 3' }
    ]);
    const [color, setColor] = useState(false);

    const ChangeColorText = () => {
        setColor(!color);
    };

    const index = todos.length;

    const onChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const onClickHandler = () => {
        if (input.trim() === '') {
            return;
        }
        const newTodo = {
            id: todos.length + 1,
            name: input.trim()
        };
        setTodos([...todos, newTodo]);
        setInput('');
    };

    const onEnterHandler = (event) => {
        if (event.key === 'Enter') {
            onClickHandler();
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <>
             <p className={`text ${color ? "textPink" : "textBlue"}`}>My ToDo</p>
             <p className={classNames("text", { textBlue: color })}>My Color</p>
            <button className="button" onClick={ChangeColorText}>Change Color Text</button>
            <input onKeyDown={onEnterHandler} onChange={onChangeHandler} placeholder='Enter to do' value={input} type='text'></input>
            <p>{index}</p>
            <ul className="wrapper">
                {todos.map(todo => (
                    <li key={todo.id} >
                        {`ID: ${todo.id}, Name: ${todo.name}`}
                        <button type='button' onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button type='button' onClick={onClickHandler}>Add</button>
        </>
    );
};

export default MyToDo;