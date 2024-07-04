const CustomSelect = ({value, setValue}) => {

    const handleSelectChange = (event) => {

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
                ></select>
            </div>
        </>
    );
};

export default CustomSelect;