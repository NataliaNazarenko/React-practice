import React, { useCallback, useState } from 'react';

function MyUseCallbackHook() {
  const [list, setList] = useState([]);

  const handleClick = useCallback(() => {
    setList(prevList => [...prevList, 'new item']);
  }, [list]);

  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default MyUseCallbackHook;