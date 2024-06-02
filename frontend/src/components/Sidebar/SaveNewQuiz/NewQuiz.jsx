import React, { useState } from "react";

const  ExamForm = ()=> {
  const [examName, setExamName] = useState("");
  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleNumQuestionsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumQuestions(value);
    setQuestions(
      Array.from({ length: value }, (_, index) => ({
        number: index + 1,
        options: "",
      }))
    );
  };
  const handleAnswerKey = () =>{
    console.log(questions)
  }
  const handleOptionChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index].options = e.target.value;
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      examName,
      questions,
    };
    console.log("Submitted Data:", data);
    // Add logic to submit data to the backend or further processing
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Create Exam</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Exam Name:</label>
          <input
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            className="w-full p-2 bg-white border border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Number of Questions:</label>
          <input
            type="number"
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            className="w-full p-2 border bg-white border-gray-300"
            required
          />
        </div>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">
              Question {question.number} Options:
            </label>
            <input
              type="text"
              value={question.options}
              onChange={(e) => handleOptionChange(index, e)}
              className="w-full p-2 border bg-white border-gray-300"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          onSubmit={()=>handleAnswerKey}
        >
          Submit Answer Key
        </button>
      </form>
    </div>
  );
}

export default ExamForm;