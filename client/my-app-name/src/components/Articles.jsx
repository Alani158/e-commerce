import React from "react";
import { articles } from "../index/products";

const Articles = () => {
  return (
    <div className=" w-[90%] mx-auto px-6 py-12">
      
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Articles</h2>
        <a
          href="/"
          className="text-gray-600 hover:text-gray-900 text-sm font-medium"
        >
          More Articles →
        </a>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="flex flex-col">
            {/* Article Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Article Title */}
            <h3 className="mt-4 text-lg font-semibold">{article.title}</h3>

      
            <a
              href={article.link}
              className="mt-2 text-sm text-gray-600 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
