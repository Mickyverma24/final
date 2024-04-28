export const logout = (req, res) => {
  try {
    res.clearCookie("jwt");

    res.status(200).send({ message: "User Logout Succfull." });
  } catch (error) {
    console.log("Error while Logging out...", error);
    res.status(500).send({ message: "Internel server error" });
  }
};
