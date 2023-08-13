import mongoose, { Schema, model } from 'mongoose';

const messageSchema = Schema({
    sender: String,
    message: String,
    timestamp: { type: Date, default: Date.now },
});
const chatSchema = Schema({
    people: {
        type: [String],
        required: true,
        unique: false,
    },
    messages: { type: [messageSchema], default: [] },
});

const ChatModel = mongoose.models.ChatModel || model('ChatModel', chatSchema);

export default ChatModel;
