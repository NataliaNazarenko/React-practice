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