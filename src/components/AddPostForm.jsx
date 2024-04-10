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

import React from "react";
import { useState } from "react";

export const Post = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    imageUrl: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // TODO: Find Contentful endpoint here....
      const response = await fetch("/Guess-my-Endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      alert("Entry added successfully!");
      setFormData({
        title: "",
        author: "",
        imageUrl: "",
        comment: "",
      }); // Reset form after sucessful submit
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center my-12 text-3xl font-bold">
        <h1>Post your Blog here!</h1>
      </div>
      <form
        className="flex flex-col justify-center my-12 gap-2 mx-2"
        onSubmit={handleSubmit}
        method="post"
      >
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter a title"
            className="input input-bordered input-primary w-[650px]"
            required
            onChange={handleChange}
            // value={formData.title}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter the name of author"
            className="input input-bordered input-primary w-[650px]"
            required
            onChange={handleChange}
            // value={formData.author}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter the image url"
            className="input input-bordered input-primary w-[650px]"
            required
            // value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <textarea
            className="textarea textarea-primary w-[650px] h-[500px]"
            placeholder="Write content"
            required
            onChange={handleChange}
            // value={formData.comment}
          ></textarea>
        </div>
        <div className="flex justify-center w-full">
          <button className="btn btn-active px-32 md:px-80 lg:px-80">
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default Post;
