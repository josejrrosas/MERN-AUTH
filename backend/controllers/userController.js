import asyncHandler from 'express-async-handler'
//@desc     Auth user/set token
//route     POST /api/use/auth
//@access   Public

//asyncHandler allows us to use async await and not have to wrap 
//everything in try catches
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

export { authUser };
