import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/User.route.js"

const app = express()
dotenv.config();

//middleware

app.use(cors());
app.use(express.json()); //data ko parse krega 

const PORT=process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb
try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("connected to mongodb");
}catch(error){
    console.log("error:",error);
}

//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})