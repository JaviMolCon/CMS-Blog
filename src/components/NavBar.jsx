import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "pastel");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "luxury" ? "pastel" : "luxury"));
  };

  const isLuxuryTheme = theme === "luxury";

  return (
    <div className="navbar bg-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentcolor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-2xl"
          >
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <HashLink to="/home/#latest">Latest</HashLink>
            </li>
            <li>
              <a href="/post">Post Entry</a>
            </li>
          </ul>
        </div>
        <a className="lg:ml-32 text-3xl lg:text-4xl font-bold cursor-default" href="/home"><img src="https://cdn.discordapp.com/attachments/1212393171879723008/1227636540830646433/-WanderLov-_THIS.png?ex=6629209f&is=6616ab9f&hm=013a266e5b03ced29412b6f106b99162db15d8279a3604e903cf5d8dea322655&"></img></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-2xl">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <HashLink to="/home/#latest">Latest</HashLink>
          </li>
          <li>
            <a href="/post">Post Entry</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="navbar-end flex items-center lg:pr-32 cursor-default">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`mr-2 ${theme === "pastel" ? "opacity-50" : ""}`}
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>

          {/* Checkbox input for toggling theme */}
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller mr-2 cursor-default"
            onClick={toggleTheme} // Call toggleTheme function on click
            checked={isLuxuryTheme} // Reflect the current theme in the checkbox
          />

          {/* Moon icon for light theme */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`ml-2 ${isLuxuryTheme ? "opacity-50" : ""}`}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
