import React from "react";
import { FiCoffee } from "react-icons/fi";

function Navbar() {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 p-6 flex justify-between items-center text-white font-medium">
        {/* Brand */}
        <div className="text-center w-full">
          <h1 className="text-2xl font-bold">RASO WONG KITO</h1>
          <p className="text-xs">Macam-Macam Kuliner Kota Palembang</p>
        </div>

        {/* Nav Items */}
        <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex space-x-6 text-sm">
          <li>
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Homepage
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Store
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="absolute right-6 top-6 flex space-x-4">
          <button></button>
          <button></button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
