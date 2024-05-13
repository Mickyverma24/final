import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const [creadentials, setCreadentials] = useState({
    username: "",
    password: "",
  });
  const {loading,login} = useLogin();
  const handleSubmit =async (e) => {
    e.preventDefault();
    await login(creadentials);
  };

  const handleChange = (e) => {
    let newcreadential = { ...creadentials };
    newcreadential[e.target.name] = e.target.value;
    setCreadentials(newcreadential);
  };

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-400">
            Login
            <span className="text-black"> L.M.O.</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10"
                value={creadentials.username}
                onChange={handleChange}
                name="username"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
                value={creadentials.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <Link
              to="/signup"
              className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              {"Don't"} have an account?
            </Link>

            <div>
              <button className="btn btn-block btn-sm mt-2">
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
      
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
