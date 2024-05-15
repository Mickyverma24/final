import jwt from "jsonwebtoken";
const generateTokenAndSave = (userId, res) => {
  console.log("user id is:",userId)
  let token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  console.log(token);
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
  return token;
};
export default generateTokenAndSave;
