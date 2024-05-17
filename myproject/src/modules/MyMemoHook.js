import React, { useState, useMemo } from "react";

const MyMemoHook = () => {
    const [list, setList] = useState([1, 2, 3]);

    const memoizedList = useMemo(() => {
        return list;
    }, [list]);
    const handleListChange = () => {
        setList([...list, list.length + 1]);
    };
    console.log('render');
    return (
        <>
        {memoizedList.map((item, index) => <li key={index}>{item}</li>)}
        <button onClick={handleListChange}>Add New Element</button>
        </>
    );
};

export default React.memo(MyMemoHook);