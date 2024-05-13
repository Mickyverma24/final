import React from 'react'
import ImageScanner from '../components/ImageCapture'
import LogOutButton from '../components/Logout'
import { useAuthContext } from '../contexts/AuthContext'
const Home = () => {
  const {authUser,setAuthUser } = useAuthContext();
  return (
    <div>
      {authUser.fullName}
      <ImageScanner/>
      <LogOutButton/>
    </div>
  )
}

export default Home