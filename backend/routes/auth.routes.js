import express from 'express'
import { signUp } from '../controllers/authControllers/signUp.js';
import { login } from '../controllers/authControllers/login.js';
import { logout } from '../controllers/authControllers/logout.js';
const router = express.Router();

router.post("/signup",signUp);
router.post("/login",login);
router.post("/logout",logout);

export default router;