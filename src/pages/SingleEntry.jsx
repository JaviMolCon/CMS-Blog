// import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEntryById } from "../lib/contentfulClient";
import Contact from "../components/Contact";

const SingleEntry = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getEntryById(id).then((entry) => {
      console.log(entry);
      setSingleBlogPost(entry);
    });
    getEntryById();
  }, []);
  return singleBlogPost?.fields ? (
    <>
      <div className="flex flex-col items-center justify-center my-12">
        <div className="mb-2 text-3xl font-bold">
          <h2 className="text-center ">{singleBlogPost.fields.title}</h2>
        </div>
        <p className="flex text-xl mb-4">
          <p className="font-bold">Post by:</p>
          {singleBlogPost.fields.author}
        </p>
        <img
          className="w-[800px] h-[500px] aspect-square object-cover px-2 rounded-3xl"
          src={singleBlogPost.fields.imgSrc}
          alt={singleBlogPost.fields.title}
        />
        <div className="flex justify-center flex-wrap gap-4 md:gap-[470px] lg:gap-[500px] ms-2 my-2">
          <p className="flex">
            <p className="font-bold">Date:</p>
            {singleBlogPost.fields.date}
          </p>
          <p className="flex">
            <p className="font-bold">Comments:</p>
            {singleBlogPost.fields.comments}
          </p>
        </div>
        <div className="flex justify-items-center lg:w-[780px] md:w-[730px] mx-4">
          <p className="flex justify-center items-center leading-loose text-lg">
            {singleBlogPost.fields.content}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-12">
        <Link
          to="/home"
          className="btn btn-secondary transition ease-in-out delay-150 hover:-translate-y-1 text-xl"
        >
          Back to home
        </Link>
      </div>
      <Contact />
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default SingleEntry;
