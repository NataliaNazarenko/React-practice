import { Navigate } from "react-router-dom";
const PrivateRoutes = ({children, isAuthorized}) => {

    if (!isAuthorized) {
        return <Navigate to="/login" replace={true}/>;
    };

    return children;
};

export default PrivateRoutes;