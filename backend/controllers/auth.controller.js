import User from "../models/user.model.js";

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

        //the avatar api link : https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girld?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });
        await newUser.save()

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic,

        })

    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({error:" Internal Server Error "});

    }

};

export const login = (req, res) => {
    res.send("Login User")
    console.log("login user");
};

export const logout = (req, res) => {
    res.send("Logout User")
    console.log("logout user");
};

