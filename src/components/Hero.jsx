import { useState } from "react";
import { Link } from "react-router-dom";

const Hero = ({
  title = "Welcome to Online Shop",
  subtitle = "Find what you love here with ease",
}) => {
  return (
    <section className="relative top-20 py-20 mb-4 h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1709884732294-90379fee354c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
          {/* Call to Action Button */}
          <a href="#produk" className="mt-6 bg-white text-green-500 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-100 transition duration-300">
            Shop Now
          </a>
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-green-900 bg-opacity-50 z-10"></div>
    </section>
  );
};

export default Hero;
