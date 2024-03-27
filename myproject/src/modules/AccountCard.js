import React from 'react';
import './Forma.css';

const AccountCard = ({name, city}) => {

    return (
        <div className='container'>
            <p>Account Card</p>
            <div>
                <p>Name: {name}</p>
            </div>
            <div>
                <p>City: {city}</p>
            </div>
        </div>
    );
};

export default AccountCard;