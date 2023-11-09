import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import User from "../models/User.js";

/* Register user*/
export const register = async (req, res) => {
  try {
    const {
      firstname,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;
    const salf =await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salf)

    const newUser = new User({
        firstname,
        lastName,
        email,
        password:passwordHash,
        picturePath,
        friends,
        location,
        occupation,
        viewedProfile: Math.floor(Math.random()*10000),
        impressions: Math.floor(Math.random()*10000)
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({error:err.message});
  }
};
