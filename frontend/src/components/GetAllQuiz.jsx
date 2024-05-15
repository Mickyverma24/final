
import React, { useState } from "react";
import useUserQuizs from "../hooks/features/useUserQuizs";
import { useQuizContext } from "../contexts/QuizContext";

const GetAllQuiz = () => {
  const [quizs, setQuizs] = useState([]);
  const {selectedQuiz, setSelectedQuiz } = useQuizContext();
  const useuserquizes = useUserQuizs();

  const handleGetAllQuizes = async () => {
    const fetchedQuizs = await useuserquizes();
    setQuizs(fetchedQuizs);
  };

  const handleQuizSelection = (quiz) => {
    setSelectedQuiz(quiz);
    console.log(selectedQuiz)
  };

  return (
    <div>
      {quizs.map((quiz, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`quiz-${index}`}
            name="quiz"
            value={quiz.quizName}
            onChange={() => handleQuizSelection(quiz)}
          />
          <label htmlFor={`quiz-${index}`}>{quiz.quizName}</label>
        </div>
      ))}
      <button className="p-2 m-2 rounded-md " onClick={handleGetAllQuizes}>
        Get All Quizzes
      </button>
    </div>
  );
};

export default GetAllQuiz;
