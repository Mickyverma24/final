import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionWithDB } from "./db/connectToMySQL.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

// allowing json payloads from request headers
app.use(express.json());
// enabling cors for all routes
app.use(cors());

connectionWithDB();

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
