import mongoose from "mongoose";
//require('dotenv').config()
import dotenv from "dotenv";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Mongo DB")
    } catch (error) {
        console.log(error)
    }
}


export default connectMongoDB;