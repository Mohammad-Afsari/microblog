import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])


    // useEffect hook:
    // This hook fires a callback function everytime the component re-renders and state changes 

    // [] -> Second argument in the useEffect Hook adds a dependancy which in this specific case, none are passed through hence the callback won't run after it's initial page load. By default just leaving [] in the dependancy will mean it will not watch over anything and that the state only will run on page load.

    // We can pass dependancies into the second argument array to watch over certain states e.g. name

    return ( // props are named as pop.name={javascript function}
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
     );
}
 
export default Home;