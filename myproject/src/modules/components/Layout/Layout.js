import { Outlet, NavLink } from 'react-router-dom';

const Layout = ({ isAuthorized }) => {
    const getActiveLink = ({ isActive }) => (isActive ? 'active-link' : '');

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
                <Outlet />
            </main>
            <footer className="app-footer">Footer</footer>
        </>
    );
};

export default Layout;
