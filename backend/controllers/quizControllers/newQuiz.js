import Quiz from "../../models/quiz.model.js";

export const newQuiz = async (req, res) => {
  const { quizName, answerKey } = req.body;

  if (!quizName || !answerKey || !Array.isArray(answerKey)) {
    return res.status(400).json({
      message: "Invalid request. Quiz name and answer key array are required.",
    });
  }

  if (answerKey.length < 5) {
    return res
      .status(400)
      .json({ message: "Enter at least 5 questions in the answer key." });
  }
  
  try {
    const existingQuiz = await Quiz.findOne({ quizName });
    if (existingQuiz) {
      return res.status(400).json({ message: "Quiz already exists." });
    }

    const newQuiz = new Quiz({
      quizName,
      answerKey, // Assuming answerKey is an array of objects with questionNumber and answer
    });

    await newQuiz.save();

    return res.status(200).json(newQuiz);
  } catch (error) {
    console.error("Error while creating new quiz:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
