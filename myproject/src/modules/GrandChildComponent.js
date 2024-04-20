import React from "react";

const GrandChildComponent = (props) => {
    console.log(props.name)
    return (
        <>
        <div>GrandChildComponent</div>
        {props.children}
        </>
    )
};

export default GrandChildComponent;