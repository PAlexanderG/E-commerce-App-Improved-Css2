import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const logIn = async (username, password) => {
    try {
      // Changed to use the proxy /api/login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const result = await response.json();
      
      if (result.token) {
        window.localStorage.setItem("token", result.token);
        return result.token;
      } else {
        throw new Error("Invalid login credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError(error.message);
      return null;
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null); // Reset error before trying

    const receivedToken = await logIn(username, password);

    if (receivedToken) {
      setToken(receivedToken);
      // Usually, after login, you want to go to Home "/" 
      // not back to the login page
      navigate("/"); 
    }
  }

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[450px] bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
        <h2 className="text-3xl font-black mb-8 text-center tracking-tight text-zinc-800">
          Welcome Back<span className="text-purple-600">.</span>
        </h2>

        {/* ERROR MESSAGE DISPLAY */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          {/* Username Field */}
          <div className="flex flex-col gap-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-50 border border-transparent focus:border-purple-500 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all duration-300"
              placeholder="Enter your username (e.g. mor_2314)"
              required
            />
          </div>

          {/* Password Field */}
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
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full max-w-[240px] h-12 bg-zinc-900 text-white rounded-full font-bold hover:bg-purple-600 transition-all duration-300 shadow-lg mx-auto block"
          >
            Sign In
          </button>
        </form>
        
        <p className="text-center mt-8 text-sm text-zinc-500 font-medium">
          Don't have an account? <span className="text-purple-600 cursor-pointer hover:underline">Sign up</span>
        </p>
      </div>
    </section>
  );
}