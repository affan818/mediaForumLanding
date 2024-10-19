// src/App.jsx
import React from "react";
import Header from "./components/Header";
import CompanySection from "./components/CompanySection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <CompanySection />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
