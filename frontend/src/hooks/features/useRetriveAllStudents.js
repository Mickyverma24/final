import toast from "react-hot-toast";

const useRetriveAllStudents = () => {
  const retriveStudents = async (quizId) => {
    try {
      if (!quizId) throw new Error("Quiz ID is required."); // Fixed error message
      const res = await fetch(
        "http://localhost:5000/api/user/quiz/retriveAllStudent"
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { retriveStudents };
};
export default useRetriveAllStudents;
