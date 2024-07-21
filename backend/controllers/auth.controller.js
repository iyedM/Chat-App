import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; // to hash the password
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try{
        const {fullName, userName, password, confirmPassword, gender, profilePic} = req.body;
        if(password !== confirmPassword) {
             return res.status(400).json({message: "Password and Confirm are different"})
             }

        const user = await User.findOne({userName});

        if(user){
            return res.status(400).json({message: "User already exists"})
        }

        //Hash password here
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);
        //the avatar api link : https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girld?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password:hashPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });
        
        if(newUser) {
        //Generate JWT token here
        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save()

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic,
        })
        } else{
            res.status(400).json({message: "Invalid User Data "})
        }

    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({error:" Internal Server Error "});

    }

};

export const login = async (req, res) => {
    try {
        const {userName, password} = req.body;
        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({message: "Invalid Username or Password "});
        }
        //Generate JWT token here
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        })

    }catch (error) {
        console.log("error in login controller", error.message);
        res.status(500).json({error:" Internal Server Error "});
    }
};

export const logout = (req, res) => {
    res.send("Logout User")
    console.log("logout user");
};

