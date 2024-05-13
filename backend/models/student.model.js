import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  regNo: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  respectiveQuiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
  marks: {
    type: Number,
    required: true,
  },
});

export const Student = new mongoose.model("Student", studentSchema);
