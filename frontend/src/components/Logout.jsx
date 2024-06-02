import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../hooks/useLogout.js";
const LogOutButton = () => {
  const { loading, logout } = useLogout();
  const handleClick = async()=>{
    await logout();
  }
  return (
    <div className="absolute bottom-0 w-full mb-4">
      {!loading ? (
        <TbLogout2
          className="w-10 h-16 cursor-pointer text-white"
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