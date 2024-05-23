import { memo } from "react";

// const areEqual = (prevProps, nextProps) => {
//     return prevProps.object.name !== nextProps.object.name;
// };

const SecondChildComponent = memo(() => {
    console.log('SecondChildComponent render');

    return (
        <>
        <p>SecondChildComponent</p>
        </>
    );
});

export default SecondChildComponent;