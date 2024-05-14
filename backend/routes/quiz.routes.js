import express from "express";
import { newQuiz } from "../controllers/quizControllers/newQuiz.js";
import { protectedUser } from "../middlewares/protectedUser.js";
import { evaluatedUser } from "../controllers/quizControllers/evaluatedUser.js";
import  retriveAllQuiz  from "../controllers/quizControllers/retriveAllQuizforRespectiveUser.js";
import retrieveAllStudents from "../controllers/quizControllers/retriveAllStudentsforRespectiveQuiz.js";

const router = express.Router();

router.post("/newquiz",protectedUser,newQuiz);
router.post("/student/:id",protectedUser,evaluatedUser)
router.get("/retriveAllQuiz",protectedUser,retriveAllQuiz);
router.get("/retriveAllStudent",protectedUser,retrieveAllStudents);

export default router;
