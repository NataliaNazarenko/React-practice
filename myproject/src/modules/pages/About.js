import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    
    // Navigate to the home page when the button is clicked
    return <>
        <h2>About Component</h2>
        <button onClick={() => navigate('/')}>Go HomePage</button>
        </>;
}