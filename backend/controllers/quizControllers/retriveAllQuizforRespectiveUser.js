import Quiz from "../../models/quiz.model.js";

 const retrieveAllQuiz = async (req, res) => {
    try {
        // Extract the user from the request object
        const user = req.user;

        // Check if user exists
        if (!user) {
            return res.status(400).send({ message: "Error: No user exists." });
        }

        // Find all quizzes created by the user
        const allQuizzesForUser = await Quiz.find({ createdBy: user._id });

        // Return the found quizzes
        return res.status(200).send(allQuizzesForUser);

    } catch (error) {
        console.error("Error while retrieving quizzes:", error);
        return res.status(500).send({ message: "Internal Server Error." });
    }
};
export default retrieveAllQuiz;