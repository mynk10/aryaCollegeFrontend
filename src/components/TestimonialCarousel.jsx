import React, { useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { testimonials } from "../utils/constants";

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 300;

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
        {/* Carousel */}
        <div
          className="flex gap-4 overflow-x-auto scrollbar-hidden scroll-smooth snap-x snap-mandatory"
          ref={carouselRef}
        >
          {testimonials.slice(0, 6).map((testimonial, i) => (
            <div
              key={i}
              className="min-w-[260px] sm:min-w-[300px] max-w-xs bg-white shadow-md rounded-lg p-6 flex-shrink-0 snap-start"
            >
              <div className="flex items-center space-x-4 mb-4">
                <FaUserCircle className="text-red-500 text-4xl" />
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.stream}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.feedback}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
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
