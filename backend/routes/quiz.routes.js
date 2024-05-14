import express from "express";
import { newQuiz } from "../controllers/quizControllers/newQuiz.js";
import { protectedUser } from "../middlewares/protectedUser.js";
import { evaluatedUser } from "../controllers/quizControllers/evaluatedUser.js";
import  retriveAllQuiz  from "../controllers/quizControllers/retriveAllQuizforRespectiveUser.js";

const router = express.Router();

router.post("/newquiz",protectedUser,newQuiz);
router.post("/student/:id",protectedUser,evaluatedUser)
router.get("/retriveAllQuiz",protectedUser,retriveAllQuiz);

export default router;
