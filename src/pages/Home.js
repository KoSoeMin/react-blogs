import './Home.css';
import useFetch from "../hooks/useFetch";

export default function Home() {

  const { data : blogs, loading, error } = useFetch("http://localhost:3001/blogs");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='Home'>
        {blogs && blogs.map(blog => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>Post by - {blog.author}</p>
            <a href=''>Read More</a>
          </div>
        ))}
    </div>
  )
}
