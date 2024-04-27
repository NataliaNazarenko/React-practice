import React, { Component } from "react";

class MyToDoClass extends Component {
    state = {
        todos: [],
        input: '',
        index: 0,
    };

    addTask = () => {
        const newIndex = this.state.index + 1;
        this.setState({
            todos: [...this.state.todos, { id: newIndex, name: this.state.input }],
            index: newIndex
        });
        this.setState({ input: '' });
    };

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({ input: value });
    };

    deleteTodo = (id) => {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    };

    componentDidMount() {
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
    
    componentWillUnmount() {
        console.log('MyToDoClass unmounted');
    };
    

    render() {        
        return (
            <>
            <p>Мої завдання</p>
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