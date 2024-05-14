export default async (req, res) => {
  const user = req?.user;
  return user
    ? res.status(200).json(user)
    : res.status(401).json({ message: "Unauthorized" });
};
