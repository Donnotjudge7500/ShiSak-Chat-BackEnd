import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },

        chatRoom: {
            type: mongoose.Types.ObjectId,
            ref: "ChatRoom"
        },

        content: {
            type: String,
            required: true
        },

        messageType: {
            type: String,
            enum: ['text', 'image', 'file', 'video', 'audio', 'system'],
            default: 'text'
        },

        attachments: {
            type: Array
        },

        messageStatus: {
            type: String,
            enum: ['sent', 'delivered', 'read'],
            default: 'sent'
        },

        isDeleted: {
            type: Boolean,
            default: false    
        },
        
        reactions: {
            type: Array
        }
    },

    {
        timestamps: true
    }
)

export const Message = mongoose.model("Message", messageSchema);