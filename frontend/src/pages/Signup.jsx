import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp.js";
const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const {loading,signup} = useSignUp();
  const handleSubmit =async (e) => {
    e.preventDefault();
    await signup(inputs)
  };
  const handleChange = (e) => {
    let newInputs = { ...inputs };
    newInputs[e.target.name] = e.target.value;
    setInputs(newInputs);
  }; 

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-white-700">
            SignUp
            <span className="text-black"> L.M.O.</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Alice Dubey"
                className="w-full input input-bordered h-10"
                value={inputs.fullName}
                onChange={handleChange}
                name="fullName"
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10"
                value={inputs.username}
                onChange={handleChange}
                name="username"
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
                value={inputs.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter same password"
                className="w-full input input-bordered h-10"
                value={inputs.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
              />
            </div>
            <Link
              to="/login"
              className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Already have an account?
            </Link>

            <div>
              <button type="submit" className="btn btn-block btn-sm mt-2">
                {loading?<span className="loading loading-spinner">Sign Up</span>:"Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
