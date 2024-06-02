import jwt from "jsonwebtoken";
const generateTokenAndSave = (userId, res) => {
  console.log("user id is:",userId)
  let token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  console.log(token);
  return token;
};
export default generateTokenAndSave;
