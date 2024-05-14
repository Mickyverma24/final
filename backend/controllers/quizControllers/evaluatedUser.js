import { Student } from "../../models/student.model.js";

export const evaluatedUser = async (req, res) => {
    try {
        const quizId = req.params.id;
        const { regNo, name, marks } = req.body;

        // Check if quizId is provided
        if (!quizId) {
            return res.status(400).send({ message: "Error: No quizId provided." });
        }

        // Check if all required fields are provided
        if (!regNo || !name || !marks) {
            return res.status(400).send({ message: "Error: All fields are required." });
        }

        // Check if student with the provided regNo exists for this quiz
        const existingStudent = await Student.findOne({ regNo, respectiveQuizId: quizId });
        if (existingStudent) {
            return res.send({ message: "Error: Student with this regNo has already been evaluated." });
        }

        // Create a new student record
        const newStudent = new Student({
            regNo,
            name,
            respectiveQuizId: quizId,
            marks
        });

        // Save the new student record to the database
        await newStudent.save();

        // Return the newly created student record
        return res.status(201).send(newStudent);

    } catch (error) {
        console.error("Error while saving newly evaluated user:", error);
        return res.status(500).send({ message: "Internal Server Error." });
    }
};
