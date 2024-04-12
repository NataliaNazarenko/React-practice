import React from "react";

const RenderComponent = () => {
    const firstRenderValue = false;
    const secondRenderValue = true;
    const thirdRenderValue = [];
    const fourthRenderValue = [1, 2, 3];

    if (firstRenderValue) {
        return <h1>First Render</h1>;
    };

    if (thirdRenderValue) {
        return <h1>Third Render</h1>;
    };

    if (secondRenderValue) {
        return <h1>Second Render</h1>;
    };


    return (
        <div>
            {/* {firstRenderValue && <h1>First Render</h1>}
            {secondRenderValue && <h1>Second Render</h1>}
            {!!thirdRenderValue.length && <h1>Third Render</h1>}
            {thirdRenderValue.length ? <h1>Third Render</h1> : null} */}
            {fourthRenderValue && <h1>Fourth Render</h1>}
        </div>
    );

};

export default RenderComponent;