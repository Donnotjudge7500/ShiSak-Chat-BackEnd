import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trime: true,
            lowercase: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address']
        },

        password: {
            type: String,
            required: true,
            minlength: 6
        },

        avatar: {
            type: String,
            default: '',
        },

        status: {
            type: String,
            enum: ['Online', 'Offline', 'Away', 'Do Not Disturb'],
            default: 'Offline'
        },

        lastlogin: {
            type: Date
        },

        bio: {
            type: String,
            default: ''
        },

        contacts: {
            type: Array,
            default: []
        },

        isVerified: {
            type: Boolean,
            default: false
        },

        notification: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema);