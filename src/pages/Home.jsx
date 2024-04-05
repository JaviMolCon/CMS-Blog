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
    <div className='flex  justify-between items-center flex-wrap ms-16 lg:ms-24'>
      {blogPosts.map((post) =>
      <div key={post.sys.id}>
        <p>{post.fields.author}</p>
        <p>{post.fields.date}</p>
        <img className='w-[500px] aspect-square object-cover rounded' src={post.fields.imgSrc}></img>
        </div>
      
      )}
    </div>
  )
}
