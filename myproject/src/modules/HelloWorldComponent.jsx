import { useState } from "react";
import { Title, Button } from "./HelloWorldComponent.styled";


const HelloWorldComponent = () => {
    const [color, setColor] = useState(false);

    const ChangeColorText = () => {
        setColor(!color);
    };

    return (
        <div>
        <Title>I am a component</Title>
        <Button primary={"red"} state={color} onClick={ChangeColorText}>I am a button</Button>
        </div>
    );
};

export default HelloWorldComponent;