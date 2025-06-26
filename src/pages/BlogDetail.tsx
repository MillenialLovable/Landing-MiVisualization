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
      <div className="bg-[#09243F] min-h-screen py-[60px] px-2 sm:px-4 text-white flex justify-center">
        <div className="bg-transparent rounded-xl p-2 sm:p-6 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl xl:max-w-[1500px] w-full lg:min-h-[400px] items-stretch">
          {/* Texto a la izquierda */}
          <div className="col-span-1 flex flex-col justify-start order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-8 h-8 rounded-full"
              />
              <span>{post.author}</span>
            </div>
            <div className="text-[#BFD7ED] text-base sm:text-xl">
              {typeof post.content === "string"
                ? post.content.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))
                : post.content}
            </div>
          </div>
          {/* Imagen a la derecha */}
          <div className="col-span-1 lg:col-span-2 flex items-start lg:items-stretch order-1 lg:order-2">
            <img
              src={post.img}
              alt={post.alt}
              className="w-full h-auto lg:h-full object-cover rounded-lg shadow-lg"
            />
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
