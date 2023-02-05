import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, username);
  };

  return (
    <div class="w-full max-w-sm mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <div class="mb-5">
          <label class="block font-medium mb-2 text-gray-700" for="username">
            Username
          </label>
          <input
            class="w-full px-3 py-2 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:border-indigo-500"
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div class="mb-5">
          <label class="block font-medium mb-2 text-gray-700" for="email">
            Email
          </label>
          <input
            class="w-full px-3 py-2 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:border-indigo-500"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div class="mb-5">
          <label class="block font-medium mb-2 text-gray-700" for="password">
            Password
          </label>
          <input
            class="w-full px-3 py-2 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:border-indigo-500"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
