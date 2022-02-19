import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true)

        fetch('https://github.com/mohammad-afsari/microblog/blob/master/db.json', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() =>{
            console.log('Blog added')
            setIsPending(false)
            history.push('/')
        })

        setTitle('')
        setBody('')
        setAuthor('')
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;