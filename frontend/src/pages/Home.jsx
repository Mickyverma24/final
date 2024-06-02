import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import Sidebar from "../components/Sidebar/Sidebar";
import DashBoard from "../components/dashBoardContainer/DashBoard";
const Home = () => {
  const { authUser, setAuthUser } = useAuthContext();
  return (
      <div className="bg-white text-black h-screen flex">
        <Sidebar />
        <DashBoard/>
    </div>
  );
};

export default Home;
