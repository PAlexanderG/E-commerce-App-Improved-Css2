import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const logIn = async (username, password) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      return result.token;
    } catch (err) {
      setError(err.message);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const token = await logIn(username, password);

    if (token) {
      window.localStorage.setItem("token", token);
      setToken(token);
      navigate("/");
    }
  }

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[450px] bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
        <h2 className="text-3xl font-black mb-8 text-center tracking-tight text-zinc-800">
          Welcome Back<span className="text-purple-600">.</span>
        </h2>

        {/* ✅ FIXED FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">

          <div className="flex flex-col gap-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-50 border border-transparent focus:border-purple-500 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all duration-300"
              placeholder="Enter your username"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-50 border border-transparent focus:border-purple-500 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all duration-300"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="mt-4 w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold hover:bg-purple-600 hover:shadow-xl hover:shadow-purple-200 transition-all active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-zinc-500 font-medium">
          Don't have an account?{" "}
          <span className="text-purple-600 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </section>
  );
}