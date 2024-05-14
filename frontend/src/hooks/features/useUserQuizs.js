import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useUserQuizs = () => {
  const [loading, setLoading] = useState(false);
  const useuserquizes = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/user/quiz/retriveAllQuiz",
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: localStorage.getItem("token"),
          },
        }
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      // setLoading(false);
    }
  };

  return useuserquizes;
};

export default useUserQuizs;
