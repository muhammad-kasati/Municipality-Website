import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar open={open} toggleMenu={toggleMenu} />
      <Hero />
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
