import { Link } from "react-router-dom";
import './NotFound.css';



const NotFound = () => {
    return(
        <div className = "whole-page">
            <h1>Page Not Found</h1>
            <p>There's nothing here</p>
            <Link to = "/">Back to Home</Link>
        </div>

    );

};

export default NotFound;