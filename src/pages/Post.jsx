import React from "react";
import { useState } from "react";
import Contact from "../components/Contact";

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
    window.alert("Your entry was not posted but let's pretend it was");
    e.preventDefault();
    setFormData("");

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
      <Contact />
    </>
  );
};

export default Post;
