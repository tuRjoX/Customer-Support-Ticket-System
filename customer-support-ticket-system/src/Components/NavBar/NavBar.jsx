import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar shadow-sm px-2 sm:px-4 sticky top-0 bg-white z-50 w-full max-w-full overflow-x-hidden">
      <div className="flex-1 min-w-0">
        <a className="text-base sm:text-lg lg:text-xl font-bold truncate">
          CS — Ticket System
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1 flex items-center gap-2 text-sm lg:text-base">
          <li>
            <a className="hover:bg-gray-100 rounded-md px-2 py-1">Home</a>
          </li>
          <li>
            <a className="hover:bg-gray-100 rounded-md px-2 py-1">FAQ</a>
          </li>
          <li>
            <a className="hover:bg-gray-100 rounded-md px-2 py-1">Changelog</a>
          </li>
          <li>
            <a className="hover:bg-gray-100 rounded-md px-2 py-1">Blog</a>
          </li>
          <li>
            <a className="hover:bg-gray-100 rounded-md px-2 py-1">Download</a>
          </li>
          <li>
            <a className="hover:bg-gray-100 rounded-md px-2 py-1">Contact</a>
          </li>
          <li>
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition border-0 text-white text-sm">
              + New Ticket
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden flex-none items-center gap-2">
        <a className="btn btn-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition border-0 text-white text-xs px-3">
          + New Ticket
        </a>
        <button
          className="btn btn-ghost btn-sm px-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50 md:hidden">
          <ul className="menu menu-vertical p-2">
            <li>
              <a className="hover:bg-gray-100 rounded-md px-3 py-2">Home</a>
            </li>
            <li>
              <a className="hover:bg-gray-100 rounded-md px-3 py-2">FAQ</a>
            </li>
            <li>
              <a className="hover:bg-gray-100 rounded-md px-3 py-2">
                Changelog
              </a>
            </li>
            <li>
              <a className="hover:bg-gray-100 rounded-md px-3 py-2">Blog</a>
            </li>
            <li>
              <a className="hover:bg-gray-100 rounded-md px-3 py-2">Download</a>
            </li>
            <li>
              <a className="hover:bg-gray-100 rounded-md px-3 py-2">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
