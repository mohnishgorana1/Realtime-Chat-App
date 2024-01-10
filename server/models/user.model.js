import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {

        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    }
});

export const User = mongoose.model('User', userSchema);

