import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectionWithDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

// allowing json payloads from request headers
app.use(express.json());
// enabling cors for all routes
app.use(cors());
// connection with database

app.use("/api/user/auth", authRoutes);

app.listen(port, () => {
  connectionWithDB();
  console.log(`Server is running on ${port}`);
});
