"use client";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import BookingSection from "./components/BookingSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const HomeCleaningPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <BookingSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomeCleaningPage;
