import React from "react";

const InputData = ({value}) => {
    return (
        <div>
        <p>FirstName: <strong>{value.name}</strong></p>
        <p>Email: <strong>{value.email}</strong></p>
        <p>Checkbox: <strong>{value.checkbox? 'Checked' : 'Not Checked'}</strong></p>
        <p>Checkbox: <strong>{value.checkbox.toString()}</strong></p>
    </div>
    )
};

export default InputData;