import  {Student}  from "../../models/student.model.js";

 const retrieveAllStudents = async (req, res) => {
  try {
    // Extract the user from the request object
    const { quizId } = req.body;
    if (!quizId) {
      return res.status(400).send({ message: "Error: NO Id found of Quiz.." });
    }

    // Check if user exists
    const studentsOfRespectiveQuiz = await Student.find({
      respectiveQuizId: quizId,
    });

    // Return the found quizzes
    return res.status(200).send(studentsOfRespectiveQuiz);
  } catch (error) {
    console.error("Error while retrieving students of quizz:", error);
    return res.status(500).send({ message: "Internal Server Error." });
  }
};
export default retrieveAllStudents;
