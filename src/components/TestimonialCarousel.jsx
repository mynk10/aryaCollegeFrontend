import React, { useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { testimonials } from "../utils/constants";

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 320;

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
          Student Testimonial
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div
          className="flex space-x-6 overflow-x-auto scrollbar-hidden scroll-smooth"
          ref={carouselRef}
        >
          {Array(6)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[300px] bg-white shadow-md rounded-lg p-6 flex-shrink-0"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <FaUserCircle className="text-red-500 text-4xl" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonials[i].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[i].stream}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  {testimonials[i].feedback}
                </p>
              </div>
            ))}
        </div>

        {/*  pagination indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeIndex === i ? "bg-red-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
