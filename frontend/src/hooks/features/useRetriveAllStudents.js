import toast from "react-hot-toast";

const useRetrieveAllStudents = () => {
  const retrieveStudents = async (quizId) => {
    try {
      if (!quizId) throw new Error("Quiz ID is required.");
      const res = await fetch(
        "http://localhost:5000/api/user/quiz/retriveAllStudents",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            quizId,
          }),
        }
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      return data;
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { retrieveStudents };
};

export default useRetrieveAllStudents;
