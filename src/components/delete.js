// DeleteBlog.js

import React from 'react';
import axios from 'axios';
import {BsTrash} from "react-icons/bs"         


const DeleteBlog = ({ blogId, onDelete }) => {
  const handleDelete = () => {
    // Delete a specific blog post by ID
    axios.delete(`http://localhost:3001/blogs/${blogId}`)
      .then(response => {
        console.log('Blog deleted:', response.data);
        // Trigger the onDelete callback function to update the UI after deletion
        onDelete();
      })
      .catch(error => {
        console.error('Error deleting blog:', error);
      });
  };

  return (
    <button onClick={handleDelete}><BsTrash/></button>
  );
};

export default DeleteBlog;
