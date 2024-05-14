import express from "express";
import { newQuiz } from "../controllers/quizControllers/newQuiz.js";
import { protectedUser } from "../middlewares/protectedUser.js";
import { evaluatedUser } from "../controllers/quizControllers/evaluatedUser.js";
import retrieveAllQuiz from "../controllers/quizControllers/rAllQuiz.js";
import retrieveAllStudents from "../controllers/quizControllers/rAllStudent.js";
import getUserDetails from "../controllers/quizControllers/getUserDetails.js";

const router = express.Router();

router.post("/newquiz", protectedUser, newQuiz);
router.post("/student/:id", protectedUser, evaluatedUser);
router.get("/retriveAllQuiz", protectedUser, retrieveAllQuiz);
router.post("/retriveAllStudent", protectedUser, retrieveAllStudents);
router.get("/getUserDetails", protectedUser, getUserDetails);

export default router;
