import Link from "next/link";
import React from "react";

const Navbar = () => {
  const menu = () => (
    <>
      <li>
        <Link
          href="/"
          className="hover:text-success transition-colors duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className="hover:text-success transition-colors duration-300"
        >
          All Products
        </Link>
      </li>
      <li>
        <Link
          href="/add-product"
          className="hover:text-success transition-colors duration-300"
        >
          Add Products
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar lg:w-9/12 md:w-10/12 mx-auto py-4 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 border border-gray-200 mt-3 w-52 p-3"
          >
            {menu()}
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost normal-case text-3xl font-extrabold tracking-tight text-success"
        >
          Shopania
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium gap-8">
          {menu()}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/login"
          className="btn btn-success text-white px-6 hover:bg-green-600 transition-colors duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
