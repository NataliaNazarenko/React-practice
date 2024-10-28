import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';



const Layout = () => {
    const getActiveLink = ({ isActive }) => (isActive ? 'active-link' : '');
    const {isAuthorized} = useContext(AuthContext);
    const isFetching = useSelector((state) => state.contacts.loading);

    return (
        <>
            <header className="app-header">
                <nav>
                    <NavLink to="/" className={getActiveLink}>Home</NavLink>
                    {isAuthorized && <NavLink to="/contacts" className={getActiveLink}>Contacts</NavLink>}
                    <NavLink to="/login" className={getActiveLink}>Login</NavLink>
                    <NavLink to="/about" className={getActiveLink}>About</NavLink>
                    <NavLink to="/form" style={({ isActive }) => ({ color: isActive ? 'red' : 'none' })}>Forma</NavLink>
                </nav>
            </header>
            <main>
                {isFetching ? <Loader /> : <Outlet />}
            </main>
            <footer className="app-footer">Footer</footer>
        </>
    );
};

export default Layout;
