import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Footer/>
    </>
  );
}

export default Home;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[570px]"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/e5/a4/fd/e5a4fdc3bf5cf3aa5b52cb5ffefa0215.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Nusantara Roast</h1>
            <p className="mb-5 text-xl font-semibold">
              Meracik Kopi Terbaik Nusantara untuk Dunia
            </p>
            <button className="btn bg-amber-700 border-amber-700 text-white shadow-none">
              Jelajahi Kopi Kami{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
