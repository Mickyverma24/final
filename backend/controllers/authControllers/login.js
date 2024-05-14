import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSave from "../../utils/jwtToken.js";
export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ message: "empty feilds are not allowed!" });
  }
  let user = await User.findOne({ username: username });
  try {
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res
        .status(400)
        .send({ message: "username or password is incorrect!" });
    }
    const token = generateTokenAndSave(user._id, res);
    res.status(202).send({
      Id: user._id,
      fullName: user.fullName,
      username: user.username,
      token,
    });
  } catch (error) {
    console.log("Error while logging...", error);
    res.status(500).send({ message: "Internal server error..." });
  }
};
