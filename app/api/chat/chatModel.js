import mongoose, { Schema, model } from 'mongoose';

const messageSchema = Schema({
    sender: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now, required: false },
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
