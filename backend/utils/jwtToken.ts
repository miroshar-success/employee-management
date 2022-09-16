import jwt from "jsonwebtoken";

const generatedToken = (
  id: string,
  name: string,
  email: string,
  role: string
) => {
  const token = jwt.sign(
    { id, name, email, role },
    process.env.JWT_KEY as string,
    { expiresIn: "2h" }
  );
  return token;
};

export default generatedToken;
