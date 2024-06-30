import React from "react";

const Checkbox = ({value, setValue}) => {

    const handleChangeCheckbox = (event) => {
        const checkbox = event.target.checked;
        console.log(checkbox);
        setValue((prevState) => ({...prevState, checkbox}));
    };

    return (
        <div style={{padding: '20px'}}>
                <label htmlFor="checkbox" style={{margin: '10px'}}>Checkbox</label>
                <input onChange={handleChangeCheckbox} type="checkbox" name="checkbox" id="checkbox" checked={value.checkbox}/>
        </div>
    )
};

export default Checkbox;