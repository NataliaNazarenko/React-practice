import React, { useRef } from "react";

const UncontrolledForm = () => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.firstName.value);
        // const name = event.target.firstName.value;
        // const email = event.target.email.value;
        // console.log({name: name, email: email});

        console.log(formRef);
        console.log(formRef.current);
        console.log(formRef.current.firstName.value);

        formRef.current.reset();

        alert(`Input Value: ${event.target.firstName.value}`);
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName"/>
           
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email"/>
            
            <button type="submit">Submit Form</button>
        </form>
    );
};

export default UncontrolledForm;