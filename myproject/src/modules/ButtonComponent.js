import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = (props) => {
    return (
        <>
            <button onClick={props.onClick} type={props.type}>{props.text}</button></>
    );
};



ButtonComponent.defaultProps = {
    type: "button",
    text: "Button",
    onClick: () => {
        alert("Button Clicked");
    },
};

ButtonComponent.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

ButtonComponent.displayName = "ButtonComponent";

export default ButtonComponent;