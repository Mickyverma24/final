import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSave from "../../utils/jwtToken.js";
export const signUp = async (req, res) => {
  const { fullName, username, password, confirmPassword } = req.body;
  if (!username || !fullName || !password || !confirmPassword) {
    return res.status(400).send({ message: "All feilds are requied..." });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .send({ message: "Password must be atleast 6 characters" });
  }
  if (password !== confirmPassword) {
    return res
      .status(400)
      .send({ message: "Password and Confirm Password did not match.." });
  }
  try {
    let user = await User.findOne({ username: username });
    if (user) {
      return res.status(400).send({ message: "User already exsist." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
    });
    await newUser.save();
    const token = generateTokenAndSave(newUser._id, res);
    res.status(200).send({
      Id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      token,
    });
  } catch (error) {
    console.log("Error while Signing In....", error);
    return res.status(400).send({ message: "Something went while signing..." });
  }
};
