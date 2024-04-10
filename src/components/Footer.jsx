import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col bg-secondary py-8 px-2">
      <div className="flex justify-around items-center flex-wrap gap-2">
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <button className="btn btn-active btn-ghost text-lg">
            Subscribe
          </button>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <div>
            <p className="text-3xl font-bold">Follow us on</p>
          </div>
          <div className="flex">
            <img src="https://img.icons8.com/?size=48&id=32323&format=png"></img>
            <img src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png"></img>
            <img src="https://img.icons8.com/?size=48&id=19318&format=png"></img>
            <img src="https://img.icons8.com/?size=48&id=XErM9A1xNUK5&format=png"></img>
            <hr />
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center pt-4 flex-wrap">
        <p>@Copyright All rights reserved</p>
        <div className="flex gap-4">
          <p className="font-bold">Privacy Policy</p>
          <p className="font-bold">Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
