const TextInputs = ({value, setValue}) => {

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
        <div style={{padding: '20px'}}>
                <label htmlFor="firstName" style={{margin: '10px'}}>First Name</label>
                <input onChange={handleNameChange} type="text" name="firstName" id="firstName"/>
            </div>
            <div style={{padding: '20px'}}>
                <label htmlFor="email" style={{margin: '10px'}}>email</label>
                <input onChange={handleEmailChange} type="email" name="email" id="email" value={value.email}/>
            </div>
        </>
    )
};

export default TextInputs;