import React, { useState }from "react";

const ControlledForm = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const [value, setValue] = useState({
        name: '',
        email: '',
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
            <p>FirstName: <strong>[value.name]</strong></p>
            <p>Email: <strong>[value.email]</strong></p>
        </div>
        </>
        
    );
};

export default ControlledForm;