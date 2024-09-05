import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="app-header">
                <nav>
                <Link to='/'>Home</Link>
                <Link to='/contacts' state={{from: "Home"}}>Contacts</Link>
                <Link to='/about'>About</Link>
                <Link to='/form'>Forma</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="app-footer">Footer</footer>
        </>
    )
};

export default Layout