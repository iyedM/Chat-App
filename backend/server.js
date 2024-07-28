import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import connectToMongoDB from "../backend/db/connectToMongoDB.js";
import cookieParser from 'cookie-parser';

const app = express()
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

/*  app.get("/", (req,res) => {
    // root route http://localhost:5000/
    res.send("Hello World 2");
});
*/


app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
