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
      <h2 className="m-2">Login:</h2>
      <section className="m-2">
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:{""}
            <input
              className="flex
          justify-center items-center"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:{""}
            <input
              className="flex
          justify-center items-center"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="bg-gray-300 flex p-4 justify-center
          items-center text-primary w-full font-medium"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
