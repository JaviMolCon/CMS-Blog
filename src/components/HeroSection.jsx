import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content  text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 lg:text-9xl text-5xl font-bold">
              Explore. Discover. Love.
            </h1>

            <p className="mb-5 font-bold text-xl text-justify ">
              Step into WanderLov, where the call of the unknown beckons and
              every journey is a love affair with exploration. Join us as we
              wander through diverse landscapes, uncover hidden treasures, and
              embrace the magic of travel. With WanderLov as our compass, let's
              embark on adventures that nourish the soul and ignite the spirit
              of wanderlust.
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search blog entries"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
