// BlogDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch a specific blog post by ID
    axios.get(`https://blogspot-phi.vercel.app/blogs/${id}`)
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog details:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Blog Details</h2>
      {blog ? (
        <div>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
