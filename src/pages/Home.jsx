import React, { useEffect, useState } from 'react';
import { getAllEntries } from '../lib/contentfulClient';

export const Home = () => {
  const [blogPosts,setBlogPosts] =useState([]);
  useEffect(() =>
  {
    getAllEntries()
    .then((entries)=>
    {
      console.log(entries);
      setBlogPosts(entries);
    })
  },[])
  return (
    <div className='flex justify-center gap-4 md:gap-18 lg:gap-20 items-center flex-wrap mx-12 md:mx-48 lg:mx-12 xl:mx-64'>
      {blogPosts.map((post) =>
      <div key={post.sys.id}>
        <p>{post.fields.title}</p>
        <img className='w-[350px] aspect-square object-cover rounded' src={post.fields.imgSrc}></img>
        <p>Posted on:{post.fields.date}</p>
        </div>
      
      )}
    </div>
  )
}
