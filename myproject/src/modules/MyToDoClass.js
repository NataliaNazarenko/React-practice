import React, { Component } from "react";

class MyToDoClass extends Component {
    state = {
        todos: [],
        input: '',
        timer: 0
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({ timer: prevState.timer + 1 }));
        }, 1000);

        const lsToDos = localStorage.getItem('todos');
        if(lsToDos) {
            this.setState({ todos: JSON.parse(lsToDos) });
        };
        console.log('MyToDoClass mounted');
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
            console.log('MyToDoClass updated');
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        };
    };

    addTask = () => {
        const newId = this.state.todos.length + 1;
        const newTodo = { id: newId, name: this.state.input };
        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo],
            input: ''
        }));
    };

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({ input: value });
    };

    deleteTodo = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }));
    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
        console.log('MyToDoClass unmounted');
    };

    render() {        
        return (
            <>
                <p>Мої завдання</p>
                <p>{this.state.timer}</p>
                <input onChange={this.onChangeHandler} placeholder='Введіть завдання' value={this.state.input} type='text'></input>
                <ul>
                    {this.state.todos.map(todo => (
                        <li key={todo.id}>
                            {`ID: ${todo.id}, Назва: ${todo.name}`}
                            <button type='button' onClick={() => this.deleteTodo(todo.id)}>Видалити</button>
                        </li>
                    ))}
                </ul>
                <button type='button' onClick={this.addTask}>Додати завдання</button>
            </>
        );
    };
};

export default MyToDoClass;