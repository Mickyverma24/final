import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import NewQuiz from '../Sidebar/SaveNewQuiz/NewQuiz'
const DashBoard = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='h-full w-full'>
        {authUser.username}
        <NewQuiz/>
    </div>
  )
}

export default DashBoard