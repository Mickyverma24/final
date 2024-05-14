import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../hooks/useLogout.js";
const LogOutButton = () => {
  const { loading, logout } = useLogout();
  const handleClick = async()=>{
    await logout();
  }
  return (
    <div className="mt-auto">
      {!loading ? (
        <TbLogout2
          className="w-6 h-6 cursor-pointer text-black"
          onClick={handleClick}
        />
      ) : (
        <span className="loading loading-spinner">

        </span>
      )}
    </div>
  );
};

export default LogOutButton;