import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer/>
    </>
  );
}

export default Home;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[780px]"
        style={{
          backgroundImage: "url('/kuliner.jpg')",
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

function Section2() {
  return (
    <>
      <div className="hero bg-base-200 h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://bams.jambiprov.go.id/wp-content/uploads/2023/10/Jembatan-Ampera-1.png"
            className="w-xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-red-800 border-red-800 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section3() {
  return (
    <>
      <div className="text-center my-10 mt-20">
        <h1 className="text-3xl font-bold mb-2">Why Choose Us</h1>
        <p className="text-gray-600 text-lg">Our Commitment to Excellence</p>
        <p className="text-gray-500 mt-1">
          Discover why coffee businesses around the world trust Aroma Sriwijaya
          for their premium Indonesian coffee needs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Card 1 */}
        <div className="card bg-base-100 w-80 shadow-md">
          <figure className="p-4">
            <img
              src="https://img.freepik.com/free-vector/airplane-flying-world-map_23-2147513693.jpg"
              alt="Global Reach"
              className="rounded-xl h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Global Reach</h2>
            <p>
              We export to roasteries and wholesalers worldwide, with efficient
              logistics and reliable delivery.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-80 shadow-md">
          <figure className="p-4">
            <img
              src="https://img.freepik.com/free-vector/quality-control-concept-illustration_114360-1173.jpg"
              alt="Quality Assurance"
              className="rounded-xl h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Quality Assurance</h2>
            <p>
              Rigorous quality control ensures only the finest beans make it to
              your roastery.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-80 shadow-md">
          <figure className="p-4">
            <img
              src="https://img.freepik.com/free-vector/environment-concept-illustration_114360-3481.jpg"
              alt="Sustainability"
              className="rounded-xl h-48 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sustainability</h2>
            <p>
              Direct partnerships with farmers promote sustainable practices and
              fair compensation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Section4() {
  return (
    <div className="my-10 text-center px-4 mt-20">
      <h1 className="text-3xl font-bold mb-6">Why Choose Us</h1>

      {/* Carousel wrapper */}
      <div className="carousel w-full max-w-5xl h-64 mx-auto rounded-lg shadow-lg">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full h-64 object-cover rounded-lg"
            alt="Slide 1"
          />
          <div className="absolute inset-y-1/2 left-2 right-2 flex justify-between transform -translate-y-1/2">
            <a href="#slide4" className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300">❮</a>
            <a href="#slide2" className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full h-64 object-cover rounded-lg"
            alt="Slide 2"
          />
          <div className="absolute inset-y-1/2 left-2 right-2 flex justify-between transform -translate-y-1/2">
            <a href="#slide1" className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300">❮</a>
            <a href="#slide3" className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full h-64 object-cover rounded-lg"
            alt="Slide 3"
          />
          <div className="absolute inset-y-1/2 left-2 right-2 flex justify-between transform -translate-y-1/2">
            <a href="#slide2" className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300">❮</a>
            <a href="#slide4" className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full h-64 object-cover rounded-lg"
            alt="Slide 4"
          />
          <div className="absolute inset-y-1/2 left-2 right-2 flex justify-between transform -translate-y-1/2">
            <a href="#slide3" className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300">❮</a>
            <a href="#slide1" className="btn btn-sm btn-circle bg-white text-black hover:bg-gray-300">❯</a>
          </div>
        </div>
      </div>

      {/* Carousel navigation buttons */}
      <div className="flex w-full justify-center gap-2 py-4">
        <a href="#slide1" className="btn btn-xs">1</a>
        <a href="#slide2" className="btn btn-xs">2</a>
        <a href="#slide3" className="btn btn-xs">3</a>
        <a href="#slide4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
}

