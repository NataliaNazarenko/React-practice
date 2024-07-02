const RadioButtons = ({value, setValue}) => {

    const handleRadioChange = (event) => {
        const radio = event.target.name;
        setValue((prevState) => ({...prevState, radio}));
    };

    return (
        <>
            <div style={{padding: '20px'}}>
                <label htmlFor="radio1" style={{margin: '10px'}}>Radio 1</label>
                <input 
                onChange={handleRadioChange} 
                type="radio" 
                name="radio1" 
                id="radio1" 
                checked={value.radio === 'radio1'}
                />
            </div>
            <div style={{padding: '20px'}}>
                <label htmlFor="radio2" style={{margin: '10px'}}>Radio 2</label>
                <input 
                onChange={handleRadioChange} 
                type="radio" 
                name="radio2" 
                id="radio2" 
                checked={value.radio === 'radio2'}
                />
            </div>
        </>
    );
};

export default RadioButtons;