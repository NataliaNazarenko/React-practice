const CustomSelect = ({value, setValue}) => {

    const selectOptions = [
        {id: 1, value: 'option1'},
        {id: 2, value: 'option2'},
        {id: 3, value: 'option3'},
        {id: 4, value: 'option4'},
        {id: 5, value: 'option5'},
    ]

    const handleSelectChange = (event) => {
        console.log(event.target.value);
        const select = event.target.value;
        
        setValue(prevState => ({ ...prevState, select }));
    };

    return (
        <>
        <div style={{padding: '20px'}}>
                <label htmlFor="radio1" style={{margin: '10px'}}>Select</label>
                <select 
                onChange={handleSelectChange} 
                type="select" 
                name="select" 
                id="select" 
                >
                    {selectOptions.map((option) => {
                        return (<option key={option.id}>{option.value}</option>);
                    })}
                </select>
            </div>
        </>
    );
};

export default CustomSelect;