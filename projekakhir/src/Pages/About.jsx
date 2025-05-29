import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SejarahSection/>
      <Footer />
    </>
  );
}

export default About;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[760px]"
        style={{
          backgroundImage: "url('/about.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Rasakan Lezatnya</h1>
            <p className="mb-5 text-xl font-semibold">
              Temukan cita rasa khas dari Kota Palembang yang menggoda selera,
              hanya di sini!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function SejarahSection() {
  return (
    <section className="py-10 px-4 text-center">
      <h1 className="text-4xl font-bold text-red-800 mb-8">
        Sejarah Raso Wong Kito
      </h1>

      <div className="tabs tabs-boxed justify-center mb-6 font-bold">
        <a href="#tahun2023" className="tab">
          2023
        </a>
        <a href="#tahun2024" className="tab">
          2024
        </a>
      </div>

      <div className="max-w-3xl mx-auto">
        <div id="tahun2023" className="tab-content">
          <img
            src="https://i.pinimg.com/736x/ec/f9/1b/ecf91b4d35b1a98bf9a7af8538110a3a.jpg"
            alt="Foto 2023"
            className="mx-auto rounded-lg shadow-xl mb-4"
          />
          <p className="text-black text-lg mt-10">
            Pada tahun 2023, kami berempat memulai perjalanan Raso Wong Kito dengan tujuan 
            memperkenalkan kuliner khas Palembang ke khalayak yang lebih luas. Awalnya, 
            kami hanya mengandalkan resep turun-temurun dan semangat berbagi rasa unik dari kota kami. 
            Meskipun penuh tantangan, kami percaya bahwa cita rasa otentik Palembang mampu menarik hati banyak orang, 
            terutama mereka yang belum pernah mencicipi kelezatan kuliner kami sebelumnya.
          </p>
        </div>

        <div id="tahun2024" className="tab-content">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Foto 2024"
            className="mx-auto rounded-lg shadow-xl mb-4"
          />
          <p className="text-black text-lg">
            Memasuki tahun 2024, Raso Wong Kito mulai dikenal dan dipercaya oleh pelanggan dari luar Palembang. 
            Berkat konsistensi kami menjaga kualitas dan inovasi dalam penyajian, semakin banyak orang yang menyukai dan merekomendasikan kuliner kami. 
            Kami bangga dapat membawa rasa dan budaya Palembang ke panggung yang lebih besar, menjadikan Raso Wong Kito bukan hanya sekedar tempat makan, 
            tapi juga simbol kebanggaan warisan kuliner kami.
          </p>
        </div>
      </div>

      <style>{`
        .tab-content {
          display: none;
        }
        /* Tampilkan konten jika sedang ditarget */
        .tab-content:target {
          display: block;
        }
        /* Jika tidak ada target di URL (halaman baru dibuka), tampilkan konten tahun2023 */
        body:not(:has(:target)) .tab-content#tahun2023 {
          display: block;
        }
      `}</style>
    </section>
  );
}
