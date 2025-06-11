import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleRahul = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      });

      const data = await response.json();

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    if (!!token) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="  justify-center  w-3/5 h-screen ">
        <div className="flex-col mt-40 w-100 p-5 ml-60">
          <img
            className="w-10 ml-40"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          ></img>
          <h1 className="font-bold text-2xl mt-5 ml-10">
            Sign in to your account
          </h1>
          <p className="mt-4 font-medium">Username</p>

          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border mt-1 rounded p-1.5 w-90"
          />
          <p className="mt-4 font-medium">Password</p>

          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border mt-4 rounded p-1.5 w-90"
          />
          <p></p>
          <button
            onClick={handleRahul}
            className="border rounded mt-6 p-1.5 w-90 hover:bg-blue-700 bg-blue-800 font-bold text-white"
          >
            Sign in
          </button>
        </div>
      </div>

      <div className="bg-blue-600 h-screen relative w-2/5">
        <video
          className="absolute right-0 left-0 h-screen w-screen object-cover autoplay"
          src="https://admin.workplanx.dev/login-info-video.mp4"
          autoPlay
          muted
          loop
        />

        <div className="absolute inset-0 bg-blue-600/50"></div>
      </div>
    </div>
  );
}

export default Login;
