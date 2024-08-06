import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

const Carousel = ({ cards }) => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll(-300)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-10"
      >
        &lt;
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-12 px-4"
      >
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0">
            <ProjectCard
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              link={card.link}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll(300)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
