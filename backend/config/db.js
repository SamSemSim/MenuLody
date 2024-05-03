import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://username:password@cluster0.6tllunk.mongodb.net/projectname').then(()=>console.log("DB CONNECTED"));
}
