import React from "react";
import { FiCoffee } from "react-icons/fi";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-18">
        {/* Bagian KIRI - MENU */}
        <div className="navbar-start">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <a className="font-bold hover:text-amber-800">Beranda</a>
            </li>
            <li>
              <a className="font-bold hover:text-amber-800">Tentang Kami</a>
            </li>
            <li>
              <a className="font-bold hover:text-amber-800">Produk</a>
            </li>
            <li>
              <a className="font-bold hover:text-amber-800">Kontak</a>
            </li>
          </ul>
          
          {/* Menu dropdown untuk layar kecil */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a>Beranda</a>
              </li>
              <li>
                <a>Tentang Kami</a>
              </li>
              <li>
                <a>Produk</a>
              </li>
              <li>
                <a>Kontak</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bagian TENGAH - LOGO */}
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl flex items-center gap-2">
            <FiCoffee className="text-amber-800" />
            Raso Wong Kito
          </a>
        </div>

        {/* Bagian KANAN - BUTTON */}
        <div className="navbar-end">
          <a className="btn mr-4 rounded-3xl hover:bg-amber-800 hover:text-white hover:scale-105 transition duration-300">Belanja Sekarang</a>
          <a className="btn bg-amber-800 text-white rounded-3xl hover:bg-gray-100 hover:text-black hover:scale-105 transition duration-300">Hubungi Kami</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
