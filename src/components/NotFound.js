import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oops! Page not found.</h2><br/>
            <Link to="/">Home</Link>
            <br/><br/>
            <img 
                src="https://i.pinimg.com/originals/8b/ac/ed/8baced16af299cba94b05f0fc1476cfe.jpg"
                alt="new" height='400px'
            /><br/><br/><br/>
            <p>This is not where you want to be. Please go back to "Home". There are dangerous beings in this part of the world. Woooo...</p><br/><br/>
        </div>
    );
}
 
export default NotFound;