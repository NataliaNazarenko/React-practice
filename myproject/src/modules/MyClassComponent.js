import { Component } from "react";

class MyClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'I am a class component',
        };

        console.log('MyClassComponent constructor');
    };
    componentDidMount() {
        console.log('MyClassComponent componentDidMount')
    };

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.name !== nextState.name) {
            return true;
        };
        return false;
    };

    componentDidUpdate(prevProps, prevState) {
        if(this.state.name!== prevState.name) {
            console.log('MyClassComponent componentDidUpdate')
        };
    };
    
    render() {
        console.log('MyClassComponent render')
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    };
};

export default MyClassComponent;