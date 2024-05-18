import React, { useCallback, useEffect, useState } from "react";

const MyUseCallbackHook = () => {
    const [list, setList] = useState([1, 2, 3]);

    const handleUseCallbackExample = useCallback (() => {
        setList([...list, list.length + 2]);

    }, []);

    useEffect(() => {
        handleUseCallbackExample();
        console.log('render')
    }, [handleUseCallbackExample]);

    const handleClick = () => {
        setList([]);
    };

    return (
        <>
           
            <button onClick={handleClick}>Click Me</button>
        </>
    );
};

export default MyUseCallbackHook;