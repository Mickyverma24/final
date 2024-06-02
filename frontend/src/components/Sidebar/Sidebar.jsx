import React from 'react';
import LogOutButton from '../Logout';
import { useAuthContext } from '../../contexts/AuthContext';

const Sidebar = () => {
  const {authUser} = useAuthContext()
  return (
    <div className=" w-64 h-screen bg-black text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">{authUser.username}</h1>
      <button className="mb-4 p-2 bg-blue-500 hover:bg-blue-700 rounded">Make new Quiz</button>
      <button className="mb-4 p-2 bg-blue-500 hover:bg-blue-700 rounded">Show all Quizs</button>
      <button className="mb-4 p-2 bg-blue-500 hover:bg-blue-700 rounded">Show all Students</button>
      <div>
        <LogOutButton/>
      </div>
    </div>
  );
};

export default Sidebar;
