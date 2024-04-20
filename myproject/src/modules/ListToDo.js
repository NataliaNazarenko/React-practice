import React from "react";
import GrandChildComponent from './GrandChildComponent';
import ButtonComponent from './ButtonComponent';

const ListToDo = (props) => {
    console.log(props)

    const handleDelete = () => {
        console.log("delete button clicked")
    };

    return (
        <>
            
            <li>{props.name}</li>
            <p>{props.myName.name}</p>
            <p>{props.myNameinArray[0]}</p>
            <p>{props.MyFunctionName()}</p>
            <GrandChildComponent newProp={props.name}>
                <ButtonComponent type="button" text="Delete" onClick={handleDelete}/>
            </GrandChildComponent>
        </>
    );
};

export default ListToDo;