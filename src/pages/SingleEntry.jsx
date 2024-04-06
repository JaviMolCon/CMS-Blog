// import React from "react";
import { Link,useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getEntryById } from "../lib/contentfulClient";

const SingleEntry = () => {

  const [singleBlogPost,setSingleBlogPost] =useState([]);
  const { id } = useParams();

  useEffect(() =>
    {
      getEntryById(id)
      .then((entry)=>
      {
        console.log(entry);
        setSingleBlogPost(entry);
      })
      getEntryById();
  },[])
  return singleBlogPost?.fields?(
    <>
   <Header />
    <div className='flex flex-col items-center justify-center my-12'>
      <div className='mb-2 text-3xl font-bold'>
        <h2 className="text-center ">{singleBlogPost.fields.title}</h2>
      </div>
      <figure>
        <img className='w-[800px] h-[500px] aspect-square object-cover px-2' src={singleBlogPost.fields.imgSrc} alt={singleBlogPost.fields.title} />
      </figure>
      <div className='flex justify-center flex-wrap gap-4 md:gap-[160px] lg:gap-[180px] ms-2 my-2'>
        <p className='flex'><p className='font-bold'>Post by:</p>{singleBlogPost.fields.author}</p>
        <p className='flex'><p className='font-bold'>Date:</p>{singleBlogPost.fields.date}</p>
        <p className='flex'><p className='font-bold'>Comments:</p>{singleBlogPost.fields.comments}</p>
      </div>
      <div>
        {/* <p>{singleBlogPost.fields.entryContent}</p> */}
      </div>
    </div>
    <div className='flex justify-center items-center my-12'><Link to="/home" className="btn btn-primary transition ease-in-out delay-150 hover:-translate-y-1 text-xl">Back to home</Link></div>
    <Footer />
    </>
  ):(<p>Loading...</p>)
 
    


};

export default SingleEntry;
