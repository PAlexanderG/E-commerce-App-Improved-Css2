// import the useState hook from React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// create a Signing component, and ensure it is the default export.
// deconsruct SignUpForm()

export default function Login({ token, setToken }) {
  // create three state variables for our form inputs: username, password, and error. Their default values should be "", "" and null, respectively.

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
          username: username,
          password: password,
        }),
      });
      const result = await response.json();
      console.log(result.token);
      const token = result.token;
      window.localStorage.setItem("token", token);
      return token;
    } catch (error) {
      console.error(error);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("Hello 👋");

    // try {
    // console.log("Hola");
    const response = await logIn(username, password);
    const result = response;
    token = result.token;
    setToken(token);
    navigate("/login");
    // }
    console.log(response);
    // console.log("Hola");
    // } catch (error) {
    //   setError(error.message);
    // }
  }
  return (
    <>
<section className="min-h-[60vh] flex items-center justify-center px-4 py-12">
  <div className="w-full max-w-[450px] bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
    <h2 className="text-3xl font-black mb-8 text-center tracking-tight text-zinc-800">
      Welcome Back<span className="text-purple-600">.</span>
    </h2>
    
    <form className="flex flex-col gap-y-6">
      {/* Username Field */}
      <div className="flex flex-col gap-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
          Username
        </label>
        <input 
          type="text" 
          className="w-full bg-zinc-50 border border-transparent focus:border-purple-500 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all duration-300" 
          placeholder="Enter your username"
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col gap-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
          Password
        </label>
        <input 
          type="password" 
          className="w-full bg-zinc-50 border border-transparent focus:border-purple-500 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all duration-300" 
          placeholder="••••••••"
        />
      </div>

      {/* The Submit Button - Fixed Sizing */}
<button class="w-full max-w-[240px] h-12 bg-zinc-900 text-white rounded-full font-bold hover:bg-purple-600 transition-all duration-300 shadow-lg mx-auto block">
  Sign In
</button>
    </form>
    
    <p className="text-center mt-8 text-sm text-zinc-500 font-medium">
      Don't have an account? <span className="text-purple-600 cursor-pointer hover:underline">Sign up</span>
    </p>
  </div>
</section>
    </>
  );
}
