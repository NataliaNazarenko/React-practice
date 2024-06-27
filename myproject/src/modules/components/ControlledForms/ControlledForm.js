import React, { useState }from "react";

const ControlledForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        

        alert(`Input Value: ${event.target.firstName.value}`);
    };

    const handleNameChange = (event) => {
        const name = event.target.value;
        setName(name);
    };

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setEmail(email);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleNameChange} type="text" name="firstName" id="firstName"/>
           
            <label htmlFor="email">email</label>
            <input onChange={handleEmailChange} type="email" name="email" id="email"/>
            
            <button type="submit">Submit Form</button>
        </form>
        <div>
            <p>FirstName: <strong>[name]</strong></p>
            <p>Email: <strong>[email]</strong></p>
        </div>
        </>
        
    );
};

export default ControlledForm;