import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

//asyncHandler allows us to use async await and not have to wrap
//everything in try catches

//@desc     Auth user/set token
//route     POST /api/users/auth
//@access   Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

//@desc     Register a new user
//route     POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //checks if user exists by finding a single user by email
  const userExsits = await User.findOne({ email });

  //throws err if user exists, cus why would we want 2 emails in our system
  if (userExsits) {
    res.status(400);
    throw new Error("User already exists");
  }
  //creates user
  const user = await User.create({
    name,
    email,
    password,
  });

  //if user creation successful, status is 201-success - add user to DB with Id
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc     Logout User
//route     POST /api/users/logout
//@access   Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

//@desc     Get User profile
//route     GET /api/users/profile
//@access   Private - need valid json webtoken for this
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

//@desc     Update User profile
//route     PUT /api/users/profile
//@access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
