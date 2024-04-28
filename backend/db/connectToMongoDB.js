import mongoose from "mongoose";

const connectWithDB = async () => {
  try {
    const DB_OPTIONS = {
      dbname: "finalyearproject",
    };
    await mongoose.connect(process.env.DB_URI, DB_OPTIONS);
    console.log("Connection with mongodb database succssfull....");
  } catch (error) {
    console.log("Error while connecting with database...", error);
  }
};
export default connectWithDB;
