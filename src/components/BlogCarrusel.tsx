import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const useVisibleCards = () => {
  const [visibleCards, setVisibleCards] = useState(
    window.innerWidth < 640 ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 640 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return visibleCards;
};

const BlogCarrusel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const visibleCards = useVisibleCards();

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0
        ? Math.max(blogPosts.length - visibleCards, 0)
        : prev - visibleCards
    );
  };

  const handleNext = () => {
    setCurrent((prev) =>
      prev + visibleCards >= blogPosts.length ? 0 : prev + visibleCards
    );
  };

  const handleCardClick = (link: string) => {
    navigate(link);
  };

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Cambia el tiempo si lo deseas (milisegundos)
    return () => clearInterval(interval);
  }, [visibleCards, current]); // Dependencias importantes

  const visiblePosts =
    blogPosts.slice(current, current + visibleCards).length === visibleCards
      ? blogPosts.slice(current, current + visibleCards)
      : [
          ...blogPosts.slice(current),
          ...blogPosts.slice(0, visibleCards - (blogPosts.length - current)),
        ];

  return (
    <div className="flex flex-col items-center w-full px-2 py-4">
      <div className="relative w-full">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0D1E33] rounded-full p-2 z-10 hover:bg-[#00BFFF] transition"
          aria-label="Anterior"
        >
          <span className="text-2xl">{'‹'}</span>
        </button>
        <div className="flex justify-center gap-6">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-row bg-gradient-to-br from-[#112B4A] to-[#0D1E33] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300 w-full cursor-pointer"
              onClick={() => handleCardClick(post.link)}
            >
              <img
                alt={post.alt}
                className="w-[300px] h-auto object-cover flex-shrink-0"
                src={post.img}
              />
              <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
                <h2 className="text-[#00BFFF] font-semibold text-base sm:text-xl md:text-2xl leading-snug mb-4 md:mb-0 drop-shadow-md">
                  {post.title}
                </h2>
                <div className="flex items-center justify-between text-[#6B7A99] text-xs sm:text-sm md:text-base">
                  <div className="flex items-center space-x-3">
                    <img
                      alt={`Avatar de ${post.author}`}
                      className="rounded-full border-2 border-[#00BFFF]"
                      height="32"
                      src={post.avatar}
                      width="32"
                    />
                    <span className="font-medium text-white">
                      {post.author}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="far fa-clock text-[#6B7A99] text-base"></i>
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0D1E33] rounded-full p-2 z-10 hover:bg-[#00BFFF] transition"
          aria-label="Siguiente"
        >
          <span className="text-2xl">{'›'}</span>
        </button>
      </div>
      {/* Indicadores */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(blogPosts.length / visibleCards) }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx * visibleCards)}
              className={`w-3 h-3 rounded-full ${
                idx * visibleCards === current ? "bg-[#00BFFF]" : "bg-[#1A3350]"
              }`}
              aria-label={`Ir a la tarjeta ${idx + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BlogCarrusel;