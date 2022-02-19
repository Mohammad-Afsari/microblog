import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const {data: blogs, isPending, error} = useFetch('https://github.com/mohammad-afsari/microblog/blob/[main|master]/db.json')

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