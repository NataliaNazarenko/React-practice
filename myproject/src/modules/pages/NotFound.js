import { Link } from "react-router-dom";

const notFoundStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 70px)",
    width: "100%",
};

export default function NotFound() {
    return (
        <div style={notFoundStyles}>
            <h1>
                Page not found <Link to="/">Go to main page</Link>
            </h1>
        </div>
    );
};