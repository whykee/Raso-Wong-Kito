import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <HeroContact />
      <Footer />
    </>
  );
}

export default Contact;

function HeroContact() {
  return (
    <>
      <div
        className="hero h-[760px]"
        style={{
          backgroundImage: "url('/herocontact.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hubungi Kami</h1>
            <p className="mb-5 text-xl font-semibold">
              Punya pertanyaan, saran, atau ingin memesan langsung? Kami siap
              melayani Anda dengan sepenuh hati. Silakan hubungi kami melalui
              WhatsApp atau media sosial!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
