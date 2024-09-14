import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ isAuthorized, children }) => {
    return isAuthorized ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;