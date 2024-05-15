import React from 'react'
import ImageScanner from '../components/ImageCapture'
import LogOutButton from '../components/Logout'
import { useAuthContext } from '../contexts/AuthContext'
import Tabel from '../components/Tabel'
import GetAllQuiz from '../components/GetAllQuiz'
import GetAllStudents from '../components/GetAllStudents'
const Home = () => {
  const {authUser,setAuthUser } = useAuthContext();
  return (
    <div>

      Welcome ...{authUser.fullName}
      <GetAllQuiz/>
      <GetAllStudents/>
      <ImageScanner/>
      {/* make answer key */}
      
      {/* evaluate quiz */}
      <LogOutButton/>
    </div>
  )
}

export default Home