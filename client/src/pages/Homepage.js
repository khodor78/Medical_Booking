import React, { useEffect } from 'react';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../subcomponent/Header/Header';
import HeroSection from '../subcomponent/Hero-Section/HeroSection';
import Features from '../subcomponent/Feature-section/Features';
import Footer from '../subcomponent/Footer/Footer';
import { Faq } from '../subcomponent/FAQ/Faq';
import Album from '../subcomponent/Album/Album';
import AboutUs from '../subcomponent/About-us/AboutUs';

function Homepage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
      <Header />
      {/* <div className="sec"> */}
      <HeroSection />
      {/* </div> */}
      <AboutUs id="About" />

      <section class="section">
        <div class="product-banner">
          <div class="left">
            <img
              src="https://media.istockphoto.com/id/1373659740/photo/shot-of-a-young-doctor-sharing-information-from-his-digital-tablet-with-an-older-patient.jpg?s=612x612&w=0&k=20&c=xi-5BceyNKDF919oSK3GheekuIGTJ5Jl3ccWopz47LE="
              alt=""
            />
          </div>
          <div class="right">
            <div class="content">
              <h1>
                <span>Book An</span>
                <span>Appointments</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Features id="Blog" />
      <Album />

      <section class="section" id="Testemonial">
        <h2 className="center"> What our Client says about us!</h2>
        <div class="testimonial-center container">
          <div class="testimonial">
            <span>&ldquo;</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
              fugiat labore. Veritatis et omnis consequatur.
            </p>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
            <div class="img-cover">
              <img
                src="https://media.istockphoto.com/id/1373659740/photo/shot-of-a-young-doctor-sharing-information-from-his-digital-tablet-with-an-older-patient.jpg?s=612x612&w=0&k=20&c=xi-5BceyNKDF919oSK3GheekuIGTJ5Jl3ccWopz47LE="
                alt=""
              />
            </div>
            <h4>Will Smith</h4>
          </div>
          <div class="testimonial">
            <span>&ldquo;</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
              fugiat labore. Veritatis et omnis consequatur.
            </p>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
            <div class="img-cover">
              <img
                src="https://media.istockphoto.com/id/1373659740/photo/shot-of-a-young-doctor-sharing-information-from-his-digital-tablet-with-an-older-patient.jpg?s=612x612&w=0&k=20&c=xi-5BceyNKDF919oSK3GheekuIGTJ5Jl3ccWopz47LE="
                alt=""
              />
            </div>
            <h4>Will Smith</h4>
          </div>
          <div class="testimonial">
            <span>&ldquo;</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
              fugiat labore. Veritatis et omnis consequatur.
            </p>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
            <div class="img-cover">
              <img
                src="https://media.istockphoto.com/id/1373659740/photo/shot-of-a-young-doctor-sharing-information-from-his-digital-tablet-with-an-older-patient.jpg?s=612x612&w=0&k=20&c=xi-5BceyNKDF919oSK3GheekuIGTJ5Jl3ccWopz47LE="
                alt=""
              />
            </div>
            <h4>Will Smith</h4>
          </div>
        </div>
      </section>
      <Faq />

      <Footer />
    </div>
  );
}

export default Homepage;
