
// Post.jsx

import React from "react";
import { useState } from "react";
import { createClient } from "contentful-management";

import Contact from "../components/Contact";


export const Post = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    imageUrl: '',
    comment: '',
    content: ''
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
      createBlogPost(formData);
    }
    catch (error) {
      console.error("Error when invoking createBlogPost", error);
    }
  };

  const createBlogPost = async (newBlogData) => {
    try {
      const strManagementAccessToken = import.meta.env.VITE_MANAGEMENT_ACCESS_TOKEN;

      // 1) Setup the client with our credentials. 
      //
      const client = createClient({ accessToken: strManagementAccessToken });
      console.log(strManagementAccessToken);
      const getSpace = await client.getSpace(import.meta.env.VITE_SPACE_ID);
      const environment = await getSpace.getEnvironment('master');

      // 2) Invoking the contentful content part. See_ Content part and content model in contentful
      //
      const newPost = await environment.createEntryWithId(
        'blog',
        crypto.randomUUID(),
        {
          fields: {
            title: {
              "en-US": newBlogData.title,
            },
            author: {
              "en-US": newBlogData.author,
            },
            date: {
              "en-US": new Date(Date.now()),
            },
            comments: {
              "en-US": newBlogData.comment,
            },
            imgSrc: {
              "en-US": newBlogData.imageUrl,
            },
            content: {
              "en-US": newBlogData.content,
            },
          },
        }
      );

      // 3) Posting.....
      newPost.publish();

      // 4) Reset the GUI
      setFormData({
        title: "",
        author: "",
        imageUrl: "",
        comment: "",
        content: ""
      });

      alert("Entry added successfully!");
    }
    catch (err) {
      console.error(err);
    }
  }

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
            name="title"
            value={FormData.title}
            placeholder="Enter a title"
            className="input input-bordered input-primary w-[650px]"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            name="author"
            value={FormData.author}
            placeholder="Enter the name of the author"
            className="input input-bordered input-primary w-[650px]"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="url"
            name="imageUrl"
            value={FormData.imageUrl}
            placeholder="Enter the image url"
            className="input input-bordered input-primary w-[650px]"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <textarea
            name="comment"
            value={FormData.comment}
            className="textarea textarea-primary w-[650px] h-[250px]"
            placeholder="Write content"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <textarea
            name="content"
            value={FormData.content}
            className="textarea textarea-primary w-[650px] h-[250px]"
            placeholder="Write content"
            required
            onChange={handleChange}
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
