import React from "react";
import GrandChildComponent from './GrandChildComponent';

const ListToDo = ({name}) => {
    
    return (
        <>
            
            <li>{name}</li>
            <GrandChildComponent newProp={name}/>
        </>
    );
};

export default ListToDo;