//
// Addpostform.jsx
//
// Description:
// 1) Returns essentially a HTML form to submit posts
// 2) Submission ends in a POST request, where the endpoint and exact mechanism is not clear yet.
// 3) Will be enclosed in header and footer components and styled accordingly.
//
// TODOs:
// 1) Clarify POST request circumstances(-> Lilian). -> CreateClient?
// 2) Separate concerns: Form processing + POSTing (SOLID)
// 3) Layout. This works using the Tailwind index.css dummy. Remove <br> in form where possible.
// 4) Clarify text lengths in form
// Remove TODOs that are done ;-)

import "../index.css";
import React, { useState } from 'react';

function AddPostForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    imageUrl: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // TODO: Find Contentful endpoint here....
      const response = await fetch('/Guess-my-Endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {        
        throw new Error(`Error: ${response.statusText}`);
      }

      alert("Entry added successfully!");
      setFormData({
        title: '',
        author: '',
        imageUrl: '',
        comment: ''
      }); // Reset form after sucessful submit
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add Post Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label><br />
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /><br /><br />

        <label htmlFor="author">Author:</label><br />
        <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required /><br /><br />

        <label htmlFor="imageUrl">Image URL:</label><br />
        <input type="url" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required /><br /><br />

        <label htmlFor="comment">Comment:</label><br />
        <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} rows="4" cols="50"></textarea><br /><br />

        <input type="submit" value="Post" />
      </form>
    </div>
  );
}

export default AddPostForm;
