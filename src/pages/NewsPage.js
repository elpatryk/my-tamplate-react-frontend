import React from "react";
import NewsItem from "./NewsItem";

const NewsPage = () => {
  const news = [
    {
      title: "News 1",
      description: "Description for news 1",
    },
    {
      title: "News 2",
      description: "Description for news 2",
    },
    {
      title: "News 3",
      description: "Description for news 3",
    },
    {
      title: "News 6",
      description: "Description for news 3",
    },
    {
      title: "News 5",
      description: "Description for news 3",
    },
    {
      title: "News 8",
      description: "Description for news 3",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10">
      {news.map((item) => (
        <NewsItem title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default NewsPage;
