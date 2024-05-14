import React, { useState } from "react";
import useUserQuizs from "../hooks/features/useUserQuizs";
import useRetriveAllStudents from "../hooks/features/useRetriveAllStudents";
import useSaveQuiz from "../hooks/features/useSaveQuiz";

const ImageScanner = () => {
  const useuserquizes = useUserQuizs();
  const {retriveStudents} = useRetriveAllStudents();
  const {saveNewQuiz} = useSaveQuiz();
  
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };
  const handleGetAllQuizes = async() =>{
    await useuserquizes();
  }
  const quizId = "66431003e26b0ebac468d1d0"
  const handleGetAllStudents = async()=>{
    await retriveStudents(quizId);
  }
  const handleSaveQuiz = async ()=>{
    await saveNewQuiz();
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleImageUpload}
      />
      {imageUrl && <img src={imageUrl} alt="Captured" />}

      <button className="p-2 m-2 rounded-md "
      onClick={handleGetAllQuizes}>get all quizes</button>
      <button className="p-2 m-2 rounded-md "
      onClick={handleGetAllStudents}>get all Students</button>
      <button className="p-2 m-2 rounded-md "
      onClick={handleSaveQuiz}>save answer key</button>
    </div>
  );
};

export default ImageScanner;
