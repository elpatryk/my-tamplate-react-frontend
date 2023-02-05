import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10">
      <form
        className="shadow-md p-8 bg-white rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label className="block font-medium mb-2 text-gray-700" for="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:border-indigo-500"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="block font-medium mb-2 text-gray-700"
            for="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:border-indigo-500"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            type="submit"
          >
            Login
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?
          <Link
            to="/signup"
            className="font-medium text-indigo-500 hover:underline"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
