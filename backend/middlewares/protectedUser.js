import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
export const protectedUser =async (req,res,next) => {
  try {
    // taking out token from cookies.jwt
    const token = req.cookies.jwt;
    console.log(req.cookies)
    console.log(token)
    if (!token){
        return res.status(401).json({error : "Unauthorized - No token found."});
    }
    // verifying token using our secret key which we provided in .env and checking authorization of the user
    const verifiedToken = jwt.verify(token,process.env.JWT_SECRET);
    if (!verifiedToken){
        return res.status(401).json({error : "Unauthorized User - Invalid Token"});
    }
    // finding authorized user which is accessing our protected route 
    const user = await User.findById(verifiedToken.userId).select("-password");
    if (!user){
        return res.status(404).json({error : "User Not found."})
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error inside the middleware :", error.message);
    res.status(500).json({message:"Internal Server error..."});
  }
}