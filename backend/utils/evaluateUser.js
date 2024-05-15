import { fileURLToPath } from "url";
import fs from "fs";
import path, { dirname } from "path";
import axios from "axios";
import FormData from "form-data";
import Quiz from '../models/quiz.model.js'
const __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);

const evaluateUser =async (req, res) => {
    const {quizId} = req.body; 
  __dirname = path.join(__dirname, "../../");
  __dirname = path.join(__dirname, req.file.path);
  console.log(__dirname);
  const imageStream = fs.createReadStream(__dirname);

  const formData = new FormData(); // Create FormData object
  formData.append("image", imageStream);

  const options = {
    method: "POST",
    url: "http://localhost:5000/api/user/evaluate/check",
    headers: formData.getHeaders(), // Set headers from FormData object
    data: formData,
  };
  
  axios(options)
    .then((response) => {
      console.log("Image sent successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error sending image:", error);
    });
  console.log(__dirname);
  console.log(req.file);
  // const localObj = {
  //   "name" : "Angad",
  //   "regNo":"2040118",
  //   "selectedOptions":[{"1":"b"},{"2":"c"},{"3":"d"},{"4":"c"},{"5":"d"}]
  // }
  // let marks = 0;
  // const respectiveAnswerKey = await Quiz.findById({quizId});
  // console.log(respectiveAnswerKey);
};

export default evaluateUser;
