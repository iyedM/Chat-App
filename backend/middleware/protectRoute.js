import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const protectRoute = async (req,res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log("token,", token);
        if(!token) {
            return res.status(401).json({error: 'token problem'});
            }
        
            //You are not authorized to access this route
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded,", decoded);
        if(!decoded) {
            return res.status(401).json({error: 'jwt problem'});
            }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user) {
            return res.status(401).json({error: 'user id problem'});
        }
        req.user = user;

        next();
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message)
        res.status(500).json({error: "Internal Server Error"});
        
    }
}
export default protectRoute;