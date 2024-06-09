import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './RegistrationForm.module.css'
import './Forma.css';

const RegistrationForm = ({name, city, email, password, handleChangeName, handleChangeCity, handleChangeEmail, handleChangePassword, onSubmitForm}) => {
    const [color, setColor] = useState(false);

    const checkPass = (pass) => {
        const beginWithoutDigit = /^\D.*$/;
        const withoutSpecialChars = /^[^-() /]*$/;
        const containsLetters = /^.*[a-zA-Z]+.*$/;

        if (beginWithoutDigit.test(pass) && withoutSpecialChars.test(pass) && containsLetters.test(pass)) {
            return true;
        } else {
            return false;
        };
    };

    const checkEmail = (email) => {
        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailValidation.test(email);
    };

    const validForm = () => {
        return checkPass(password) && checkEmail(email);
    };
    const ChangeColorText = () => {
        setColor(!color);
    };

    const setStyleColor = (type) => {
        if (type ==='green') {
            return "textGreen";
        };

        if (type ==='yellow') {
            return "textYellow";
        };
    };


    return (
        <div className='container'>
            <p className={`${styles.text} ${color ? styles.textRed : ''}`}>Registration Form</p>
            <p className={`${styles.text} ${styles[setStyleColor('yellow')]}`}>Text</p>
            <p className={classNames(styles.text, { [styles.textRed]: color, [styles.textGreen]: !color})}>Text</p>
            <button className="button" onClick={ChangeColorText}>Change Color Text</button>

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
                {validForm() && <button onClick={onSubmitForm}>Submit</button>}
            </form>
        </div>
    );
};

export default RegistrationForm;