import React from "react";
import ListToDo from "./ListToDo";

const RenderComponent = () => {
    const firstRenderValue = false;
    const secondRenderValue = true;
    const thirdRenderValue = [];
    const fourthRenderValue = [1, 2, 3];
    const toDo = [{id:1, name: 'Task 1'}, {id:2, name: 'Task 2'}, {id:3, name: 'Task 3'}, {id:4, name: 'Task 4'}];

    // if (firstRenderValue) {
    //     return <h1>First Render</h1>;
    // };

    // if (thirdRenderValue) {
    //     return <h1>Third Render</h1>;
    // };

    // if (secondRenderValue) {
    //     return <h1>Second Render</h1>;
    // };


    return (
        <div>
            {firstRenderValue && <h1>First Render</h1>}
            {secondRenderValue && <h1>Second Render</h1>}
            {!!thirdRenderValue.length && <h1>Third Render</h1>}
            {thirdRenderValue.length ? <h1>Third Render</h1> : null}
            {fourthRenderValue && <h1>Fourth Render</h1>}
            
            <ul>
                {toDo.map((item) => {
                console.log(item);
                return (
                <ListToDo key={item.id} name={item.name} />
                );
                })}
            </ul>
        </div>
    );

};

export default RenderComponent;