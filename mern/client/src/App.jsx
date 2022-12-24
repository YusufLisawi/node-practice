import React from "react";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const user = { username, email, password };
    await axios
      .post("http://localhost:1337/api/register", user)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="bg-gray-700 text-white p-4 py-8 rounded-lg w-60">
      <form className="flex flex-col" onSubmit={register}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-black border b-3 rounded-lg p-3"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black border b-3 rounded-lg p-3"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black border b-3 rounded-lg p-3"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
