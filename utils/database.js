
import mongoose from "mongoose"
import dotenv  from "dotenv";

dotenv.config({
    path:'.env'
})

const dataBaseConnection = () => {
   mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Mongodb connected successfully ");
   }).catch((error)=> {
    console.log("Database connection error : ",error);
   })
}

export default dataBaseConnection;
