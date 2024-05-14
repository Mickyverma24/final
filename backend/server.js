import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectionWithDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import quizRoutes from "./routes/quiz.routes.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

// allowing json payloads from request headers
app.use(express.json());
// enabling cors for all routes
app.use(cors());

app.use(cookieParser());

app.use("/api/user/auth", authRoutes);
app.use("/api/user/quiz", quizRoutes);
app.listen(port, () => {
  connectionWithDB();
  console.log(`Server is running on ${port}`);
});
