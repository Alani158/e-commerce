import React from "react";

const articles = [
  {
    id: 1,
    title: "7 ways to decorate your home",
    image: "image1.png", // Replace with actual image URL
    link: "#",
  },
  {
    id: 2,
    title: "Kitchen organization",
    image: "image2.png", // Replace with actual image URL
    link: "#",
  },
  {
    id: 3,
    title: "Decor your bedroom",
    image: "image4.png", // Replace with actual image URL
    link: "#",
  },
];

const Articles = () => {
  return (
    <div className=" w-[180vh] mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Articles</h2>
        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
          More Articles →
        </a>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="flex flex-col">
            {/* Article Image */}
            <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg" />

            {/* Article Title */}
            <h3 className="mt-4 text-lg font-semibold">{article.title}</h3>

            {/* Read More Link */}
            <a href={article.link} className="mt-2 text-sm text-gray-600 font-medium hover:underline">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
