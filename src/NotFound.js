import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry.</h1>
            <p>Page not found.</p>
            <p>To go back to the homepage please click <Link className="homeRedirect" to='/'>here</Link></p>
        </div>
     );
}
 
export default NotFound;