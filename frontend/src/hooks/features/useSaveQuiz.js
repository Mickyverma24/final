import toast from "react-hot-toast";
import { useState } from "react";
const useSaveQuiz = () => {
  // const [loading, setLoading] = useState(false);
  // const saveNewQuiz = async ({ quizName, answerKey }) => {
  const saveNewQuiz = async () => {
    // const success = handleInputErrors();
    // if (!success) return;
    try {
      const res = await fetch("http://localhost:5000/api/user/quiz/newquiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          quizName: "jabara",
          answerKey: [
            {
              questionNumber: 1,
              answer: "b",
            },
            {
              questionNumber: 2,
              answer: "b",
            },
            {
              questionNumber: 3,
              answer: "b",
            },
            {
              questionNumber: 4,
              answer: "b",
            },
            {
              questionNumber: 5,
              answer: "b",
            },
          ],
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
    }
  };
  return { saveNewQuiz };
};
export default useSaveQuiz;
function handleInputErrors({ quizName, answerKey }) {
  if (!quizName) {
    toast.error("enter quiz name first");
    return false;
  }
  if (!answerKey || !Array.isArray(answerKey)) {
    toast.error("enter answer key in correct manner.");
    return false;
  }
}
