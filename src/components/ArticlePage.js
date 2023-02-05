import React from "react";
import Comments from "./Comments";

const ArticlePage = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 h-64 mx-4 my-4 bg-gray-300 rounded-lg shadow-lg"></div>
      <div className="w-full lg:w-2/3 p-4 mx-4 my-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Article Title</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam,
          velit vel placerat commodo, velit velit blandit lectus, eget tincidunt
          ipsum nisi id nulla.
        </p>
        <div className="w-full max-w-sm mx-auto mt-10">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
