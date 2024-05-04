import { useEffect } from "react";

const UnmountComponent = () => {
    
        useEffect(() => {
            return () => {
              console.log('I am useEffect - componentWillUnmount');
            };
          },[]);

    return <div>UnmountComponent</div>;
    
};

export default UnmountComponent;