import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <Footer/> */}
    </>
  );
}

export default Home;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[730px]"
        style={{
          backgroundImage:
            "url(https://bams.jambiprov.go.id/wp-content/uploads/2023/10/Jembatan-Ampera.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Rasa Nusantara</h1>
            <p className="mb-5 text-xl font-semibold">
              Berbagai Macam Kuliner Dapat Anda Temukan Di Website ini
            </p>
            <button className="btn bg-white border-white text-black shadow-none rounded-2xl">
              Jelajahi Kuliner{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
