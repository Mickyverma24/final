import React, { useState } from "react";
import useUserQuizs from "../hooks/features/useUserQuizs";
import useRetriveAllStudents from "../hooks/features/useRetriveAllStudents";
import useSaveQuiz from "../hooks/features/useSaveQuiz";

const ImageScanner = () => {
  const { saveNewQuiz } = useSaveQuiz();
  const [image, setImage] = useState({ preview: "", data: "" });
  const handleSaveQuiz = async () => {
    await saveNewQuiz();
  };
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  const handlecapture = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);
    console.log(formData);
    const response = await fetch(
      "http://localhost:5000/api/user/evaluate/savequizinfo",
      {
        method: "POST",
        body: formData,
      }
    );
    if (response) setStatus(response.data);
  };
  return (
    <div>
      <button className="p-2 m-2 rounded-md " onClick={handleSaveQuiz}>
        save answer key
      </button>
      {image.preview && <img src={image.preview} width="100" height="100" />}
      <hr></hr>
      <form onSubmit={handlecapture}>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageScanner;
