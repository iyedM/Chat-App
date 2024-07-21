export const signup = async (req, res) => {
    try{
        const {fullName, userName, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword) {
             return res.status(400).json({message: "Password and Confirm are different"})
             }

        const user = await User.findOne({userName});

        if(user){
            return res.status(400).json({message: "User already exists"})
        }

        //Hash password here

        //the avatar api link : https://avatar-placeholder.iran.liara.run/
    } catch (error) {

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

