import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div className="mt-10">
      <h3 className="text-lg font-medium mb-5">Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full px-3 py-2 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:border-indigo-500"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
      <ul className="mt-10">
        {comments.map((comment, index) => (
          <li key={index} className="py-5 border-b border-gray-300">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
