const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        user_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
        name: {
            type: String,
            required: [true, "Please provide with your name"]
        },
        email: {
            type: String,
            required: [true, "Please provide with your email"]
        },
        phone: {
            type: String,
            required: [true, "Please provide with your phone number"]
        }
    },
    {
        timestamps: true
    });

module.exports=mongoose.model("Contact",contactSchema)