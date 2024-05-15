import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <QuizContext.Provider value={{ selectedQuiz, setSelectedQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};
