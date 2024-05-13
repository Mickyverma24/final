import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  quizName: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  answerKey: [{
    questionNumber : Number,
    answer : String,
  }],
});

 const Quiz = new mongoose.model("Quiz", quizSchema);

export default Quiz;
