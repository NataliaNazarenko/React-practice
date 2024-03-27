import React from 'react';
import './Forma.css';

const RegistrationForm = ({name, city, email, password, handleChangeName, handleChangeCity, handleChangeEmail, handleChangePassword, onSubmitForm}) => {

    return (
        <div className='container'>
            <p>Registration Form</p>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} placeholder="Enter your name" onChange={event => handleChangeName(event)} />
                </div>
                <div>
                    <label>City</label>
                    <input type="text" value={city} placeholder="Enter your city" onChange={event => handleChangeCity(event)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} placeholder="Enter your email" onChange={event => handleChangeEmail(event)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={event => handleChangePassword(event)} placeholder="Enter your password" />
                </div>
                <button onClick={onSubmitForm}>Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;