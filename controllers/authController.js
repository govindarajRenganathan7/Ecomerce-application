const generateToken = require('../config/generateToken');
const User = require('../models/userModel'),
      asyncHandler = require('express-async-handler')

//registering the new user
const createUser = asyncHandler( async (req, res) => {
    const {email} = req.body,
          findUser = await User.findOne({email});
          if(!findUser){
            try{
            //create new user
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
            }
            catch(err){
                throw new Error('Error on creating user', err)
            }
            
          }
          else{
            //user already exists
            throw new Error('User already exists');
          }
    
})

//login the user
const loginUser = asyncHandler(async (req, res) => {
    try{
        const {email,password} = req.body,
          findUser = await User.findOne({email})
        if(findUser && await findUser?.isPasswordMatched(password)){
            res.status(200).json({
                firstname: findUser?.firstname,
                lastname: findUser?.lastname,
                email: findUser?.email,
                mobile: findUser?.mobile,
                token: generateToken(findUser?._id)
            })
        }
        else{
            throw new Error('Enter valid Email and Password')
        }
    }
    catch(err){
        throw new Error('Error on login :',err)
    }
})

module.exports = {createUser,loginUser}