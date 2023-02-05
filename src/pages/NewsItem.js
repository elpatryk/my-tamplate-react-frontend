import React from "react";

const NewsItem = ({ title, description }) => {
  return (
    <div className="my-10 p-5 shadow-lg bg-white space-y-10 rounded">
      <h2 className="text-xl font-medium mb-5">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <p>
        {" "}
        <a
          href="/news/:id"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 mt-5"
        >
          Read More
        </a>
      </p>
    </div>
  );
};

export default NewsItem;
