import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-base-100 fixed z-[10000] w-full px-4 lg:px-20 py-1">
      <Link to="/#hero" className="brand pt-3">
        {/* eslint-env node */}
        <img src={require('../Assets/logo.svg').default} alt="ciphergirl" />
      </Link>
      <div className="dropdown absolute top-1 right-2 md:hidden">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="z-150 flex items-end menu menu-compact dropdown-content right-0 p-2 shadow bg-base-100 rounded-box w-52 float-left"
        >
          <li>
            <Link to="/#experience">Experience</Link>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <a
              href="https://ciphergirl.github.io/blog"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#contact">Contact Me!</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex">
        <ul className="menu menu-horizontal p-0 gap-2 mt-0">
          <li>
            <Link to="/#experience">Experience</Link>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <a
              href="https://ciphergirl.github.io/blog"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex items-center justify-center w-24 h-10 rounded-md py-4 text-sm bg-gradient-to-tr from-[#44c4c8] to-purple-400 hover:outline outline-stone-300">
        <Link className="font-bold text-white font" to="/#contact">
          Contact Me!
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
