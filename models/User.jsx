import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    Email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
        unique: true,
    },
    img:{
        type:String,
    },
    subscribers:{
        type:Number,
        default:0
    },
    subscribedUsers:{
        type:[String]
    },
     
})