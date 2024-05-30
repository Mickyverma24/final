import React, { useState,useEffect } from "react";
import { useQuizContext } from "../contexts/QuizContext";
import useRetriveAllStudents from "../hooks/features/useRetriveAllStudents";

const GetAllStudents = () => {
  const { selectedQuiz } = useQuizContext();
  const [students, setStudents] = useState([]);
  const { retrieveStudents } = useRetriveAllStudents();
  const handleShowStudents = async(e)=>{
    e.preventDefault();
        try {
          if (selectedQuiz) {
            console.log(selectedQuiz._id);
            const studentsData = await retrieveStudents(selectedQuiz._id);
            setStudents(studentsData);
          }
        } catch (error) {
          console.error("Error retrieving students:", error);
        }
  }
  return (
    <div>
        
      <button className="p-2 m-2 rounded-md " onClick={handleShowStudents}>
        show all students
      </button>
    </div>
  );
};

export default GetAllStudents;
