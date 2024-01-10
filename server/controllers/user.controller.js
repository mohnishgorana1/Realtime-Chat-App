import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      res.status(400).send("Please fill all required fields");
    }

    const isAlreadyExist = await User.findOne({ email });
    if (isAlreadyExist) {
      res.status(400).send("User already exists");
    }

    const newUser = new User({ fullName, email });
    bcryptjs.hash(password, 10, (err, hashedPassword) => {
      newUser.set("password", hashedPassword);
      newUser.save();
      next();
    });

    return res.status(200).send("User registered successfully");
  } catch (error) {
    console.log(error);
    res.status(400).send("Failed to register user");
  }
};
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Please fill all required fields");
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send("User email or password is incorrect");
    }

    const validateUser = await bcryptjs.compare(password, user.password);
    if (!validateUser) {
      res.status(400).send("User email or password is incorrect");
    }

    const payload = {
      userId: user._id,
      email: user.email,
    };

    const JWT_SECRET_KEY =
      process.env.JWT_SECRET_KEY || "THIS_IS_A_JWT_SECRET_KEY";

    Jwt.sign(
      payload,
      JWT_SECRET_KEY,
      { expiresIn: 84600 },
      async (err, token) => {
        await User.updateOne(
          { _id: user._id },
          {
            $set: { token },
          }
        );
        user.save();
        return res.status(200).json({
          user: {
            id: user._id,
            email: user.email,
            fullName: user.fullName,
          },
          token: token,
        });
      }
    );
  } catch (error) {
    console.log(error, "Error");
  }
};
