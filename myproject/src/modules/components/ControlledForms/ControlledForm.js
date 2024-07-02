import React, { useState }from "react";
import InputData from './InputData';
import Checkbox from "./Checkbox";
import TextInputs from "./TextInputs";

const ControlledForm = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const [value, setValue] = useState({
        name: '',
        email: '',
        checkbox: '',
        radio: 'radio1',
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

    return (
        <>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'colum'}}>
            <TextInputs value={value} setValue={setValue}/>
            <Checkbox value={value} setValue={setValue}/>
           <div style={{padding: '20px'}}>
            <button type="submit" style={{width: '200px'}}>Submit Form</button>
           </div>
        </form>
        <InputData value={value} />
        </>
        
    );
};

export default ControlledForm;