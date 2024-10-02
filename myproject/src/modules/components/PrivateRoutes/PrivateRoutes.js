import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const PrivateRoutes = ({ children }) => {
    const {isAuthorized} = useContext(AuthContext);
    return isAuthorized ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;