import React from "react";
import GrandChildComponent from './GrandChildComponent';

const ListToDo = (props) => {
    console.log(props)
    return (
        <>
            
            <li>{props.name}</li>
            <p>{props.myName.name}</p>
            <p>{props.myNameinArray[0]}</p>
            <p>{props.MyFunctionName()}</p>
            <GrandChildComponent newProp={props.name}/>
        </>
    );
};

export default ListToDo;