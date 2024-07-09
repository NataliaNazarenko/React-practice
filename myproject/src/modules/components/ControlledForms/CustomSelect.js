const CustomSelect = ({value, setValue}) => {

    const handleSelectChange = (event) => {
        console.log(event);
        const data = event.target.value;
        setValue(data);
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
                    <option value="select1">Select 1</option>
                    <option value="select2">Select 2</option>
                    <option value="select3">Select 3</option>
                </select>
            </div>
        </>
    );
};

export default CustomSelect;