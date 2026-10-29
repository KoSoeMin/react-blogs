import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

export default function BlogDetail() {

     // useParams extracts dynamic segments like :BlogId from the URL
  const { blogId } = useParams();

  const { data : blog, loading, error } = useFetch(`http://localhost:3001/blogs/${blogId}`);


  let navigate = useNavigate();

  useEffect(() => {
    if(error) {
        setTimeout(() => {
            navigate('/')
        }, 2000);
    }
  },[error, navigate])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        {blog && (
            <div>
                <h2>{blog.title}</h2>
                <p>Post By - {blog.author}</p>
                <p>{blog.body}</p>
            </div>
        )}
    </div>
  )
}
