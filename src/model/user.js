import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['doctor', 'patient'],
        default: 'patient'
    },
    password: String,
    token: String
});

export const User = mongoose.model('User', userSchema);
