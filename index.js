import express from 'express';
import dotenv from 'dotenv';
import dataBaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dataBaseConnection();

dotenv.config({
    path:".env"
})

const app = express();
const PORT =  process.env.PORT || 8080;

const corsOptions = {
    origin:["http://localhost:5173", "https://netflix-frontend-one-orpin.vercel.app"],
    credentials:true,
}

// middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));


app.use("/api/v1/user",userRoute);

app.get("/", (req,res) => {
    res.status(200).json({
        messages :"I am coming from backend",
        success:true
    })
});

app.listen(PORT, ()=> {
    console.log(`Server Listen from port ${PORT}`);
    
})
