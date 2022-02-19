import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const {data: blogs, isPending, error} = useFetch('https://my-json-server.typicode.com/mohammad-afsari/microblog/blogs')
    
    return (
        <div className="home">
            {/* Conditional template */}
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
     );
}

export default Home;