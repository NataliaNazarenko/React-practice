import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import AccountCard from './AccountCard';
import './Forma.css';

const Forma = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [acc, setAcc] = useState(false);

    const HandleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const HandleChangeName = (e) => {
        setName(e.target.value);
    };

    const HandleChangeCity = (e) => {
        setCity(e.target.value);
    };

    const HandleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const OnSubmitForm = (e) => {
        e.preventDefault();
        setAcc(true);
    }

    return (
        <div className='container'>
            {acc ? <AccountCard 
                name={name} city={city} email={email} password={password} /> 
                : <RegistrationForm 
                handleChangeEmail={HandleChangeEmail}
                handleChangeName={HandleChangeName}
                handleChangeCity={HandleChangeCity}
                handleChangePassword={HandleChangePassword}
                name={name} city={city} email={email} password={password}
                onSubmitForm={OnSubmitForm}
                />}
        </div>
    );
};

export default Forma;