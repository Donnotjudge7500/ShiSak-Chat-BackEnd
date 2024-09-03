import mongoose from "mongoose";


const chatRoomSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },

        participants: {
            type: [mongoose.Types.ObjectId],
            ref: "User",
            required: true
        },

        chatType: {
            type: String,
            enum: ['private', 'group'],
            required: true
        },

        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },

        message: {
            type: [mongoose.Types.ObjectId],
            ref: "Message",
        },

        lastMessage: {
            type: mongoose.Types.ObjectId,
            ref: "Message",
        },

        isGroup: {
            type: Boolean,
            default: false
        },

        groupIcon: {
            type: String
        },

        admins: {
            type: [mongoose.Types.ObjectId],
            ref: "User"
        }
    },

    {
        timestamps: true
    }
)

export const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema)