// BlogList.js
import DeleteBlog from './delete';
import BlogForm from './create';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch all blog posts
    axios.get('https://blogspot-phi.vercel.app/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  const handleDelete = () => {
    // Function to update UI after blog deletion
    window.location.reload()
  };




  return (
    <div>    

    <BlogForm/>

      <h2>Blog List</h2>
      <ul>
        {blogs.map(blog => (
            <>
          <li key={blog._id}>
            <a href={`/blogs/${blog._id}`}>{blog.title}</a>
          </li>
          <DeleteBlog blogId={blog._id} onDelete={handleDelete} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
