import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div class="flex items-center justify-between bg-base-100 fixed z-[10000] w-full px-4 lg:px-20 pb-2 pt-3">
      <Link to="/#hero" className="brand">
        <img src={require('../Assets/logo.svg').default} alt="ciphergirl" />
      </Link>
      <div class="dropdown absolute top-2 right-2 md:hidden">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="z-150 flex items-end menu menu-compact dropdown-content right-0  mt-3 p-2 shadow bg-base-100 rounded-box w-52 float-left"
        >
          <li>
            <Link to="/#experience">Experience</Link>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <a href="https://ciphergirl.github.io/blog" target="_blank">
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

      <div class="hidden md:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/#experience">Experience</Link>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <a href="https://ciphergirl.github.io/blog" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
        </ul>
      </div>
      <div class="hidden md:flex">
        <Link class="btn btn-outline btn-accent" to="/#contact">
          Contact Me!
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
