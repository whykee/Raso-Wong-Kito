import { FiCoffee } from "react-icons/fi";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-lg"
            : "bg-transparent text-white"
        }`}
      >
        <div className="absolute left-6 top-6">
        </div>
        {/* Main navbar content */}
        <div
          className={`p-6 flex justify-between items-center font-medium transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {/* Brand */}
          <div className="text-center w-full">
            <h1 className="text-2xl font-bold">RASO WONG KITO</h1>
            <p className="text-xs">Macam-Macam Kuliner Kota Palembang</p>
            <div className={`w-full flex justify-center pb-4`}>
              <ul
                className={`flex space-x-6 text-sm pt-5 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <li>
                  <a
                    href="#"
                    className={`hover:underline transition-colors duration-100 ${
                      isScrolled
                        ? "hover:text-orange-600"
                        : "hover:text-yellow-300"
                    }`}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`hover:underline transition-colors duration-100 ${
                      isScrolled
                        ? "hover:text-orange-600"
                        : "hover:text-yellow-300"
                    }`}
                  >
                    Homepage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`hover:underline transition-colors duration-100 ${
                      isScrolled
                        ? "hover:text-orange-600"
                        : "hover:text-yellow-300"
                    }`}
                  >
                    Store
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`hover:underline transition-colors duration-100 ${
                      isScrolled
                        ? "hover:text-orange-600"
                        : "hover:text-yellow-300"
                    }`}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`hover:underline transition-colors duration-100 ${
                      isScrolled
                        ? "hover:text-orange-600"
                        : "hover:text-yellow-300"
                    }`}
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Icons */}
          <div className="absolute right-6 top-6 flex space-x-4">
            <button
              className={`transition-colors duration-100 ${
                isScrolled ? "hover:text-orange-600" : "hover:text-yellow-300"
              }`}
            ></button>
            <button
              className={`transition-colors duration-100 ${
                isScrolled ? "hover:text-orange-600" : "hover:text-yellow-300"
              }`}
            ></button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
