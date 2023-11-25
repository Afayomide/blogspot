// BlogForm.js

import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Create a new blog post
    axios.post('https://blogspot-phi.vercel.app/blogs', formData)
      .then(response => {
        console.log('Blog created:', response.data);
        // Reset form after submission
        setFormData({ title: '', content: '' });
      })
      .catch(error => {
        console.error('Error creating blog:', error);
      });  

  };
  const handlerefresh = () => {
    // Function to update UI after blog deletion
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" >Create</button>
      </form>
    </div>
  );
};

export default BlogForm;
