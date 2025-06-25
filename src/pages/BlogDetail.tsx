import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import BlogCarrusel from "../components/BlogCarrusel";
import { blogPosts } from "../data/blogPosts";

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <>
        <NavBar />
        <div className="text-white p-8">
          <h2>No se encontró el post</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="bg-[#09243F] min-h-screen py-[60px] px-2 sm:px-4 text-white">
        <div className="bg-transparent rounded-xl mx-auto p-2 sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-8 items-center lg:items-stretch max-w-4xl xl:max-w-6xl lg:min-h-[100px]">
          {/* Imagen arriba en mobile/tablet, derecha en desktop */}
          <div className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:w-[340px] xl:w-[400px] 2xl:w-[420px] mb-6 lg:mb-0  order-1 lg:order-2 flex-shrink-0 flex items-center h-auto lg:h-auto">
            <img
              src={post.img}
              alt={post.alt}
              className="w-full max-h-80 object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>
          {/* Texto */}
          <div className="flex-1 w-full order-2 lg:order-1 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{post.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full" />
              <span>{post.author}</span>
            </div>
            <div className="text-[#BFD7ED] text-base sm:text-lg text-left">{post.content}</div>
          </div>
        </div>
      </div>
      {/* Carrusel debajo del contenido */}
      <div className="bg-[#09243F] py-[60px] px-2 sm:px-10 md:px-20">
        <h1 className="text-2xl sm:text-4xl font-bold text-start text-white mb-8">
          Insights y Novedades sobre BI y Analítica
        </h1>
        <BlogCarrusel />
      </div>
    </>
  );
};

export default BlogDetail;