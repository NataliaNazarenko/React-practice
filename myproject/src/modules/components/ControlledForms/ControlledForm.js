import React, { useState }from "react";
import InputData from './InputData'

const ControlledForm = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const [value, setValue] = useState({
        name: '',
        email: '',
        checkbox: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        

        alert(`Input Value: ${event.target.firstName.value}`);
    };

    // const handleNameChange = (event) => {
    //     const name = event.target.value;
    //     setName(name);
    // };

    // const handleEmailChange = (event) => {
    //     const email = event.target.value;
    //     setEmail(email);
    // };

    const handleNameChange = (event) => {
        const name = event.target.value;
        setValue((prevState) => ({...prevState, name}));
    };

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setValue((prevState) => ({...prevState, email}));
    };

     const handleChangeCheckbox = (event) => {
        const checkbox = event.target.checked;
        console.log(checkbox);
        setValue((prevState) => ({...prevState, checkbox}));
    };

    return (
        <>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'colum'}}>
            <div style={{padding: '20px'}}>
                <label htmlFor="firstName" style={{margin: '10px'}}>First Name</label>
                <input onChange={handleNameChange} type="text" name="firstName" id="firstName"/>
            </div>
            <div style={{padding: '20px'}}>
                <label htmlFor="email" style={{margin: '10px'}}>email</label>
                <input onChange={handleEmailChange} type="email" name="email" id="email" value={value.email}/>
            </div>
            <div style={{padding: '20px'}}>
                <label htmlFor="checkbox" style={{margin: '10px'}}>Checkbox</label>
                <input onChange={handleChangeCheckbox} type="checkbox" name="checkbox" id="checkbox" checked={value.checkbox}/>
            </div>
           <div style={{padding: '20px'}}>
            <button type="submit" style={{width: '200px'}}>Submit Form</button>
           </div>
        </form>
        <InputData value={value} />
        </>
        
    );
};

export default ControlledForm;