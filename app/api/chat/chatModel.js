import dotenv from 'dotenv';
import mongoose, { Schema, model } from 'mongoose';
dotenv.config({ path: '../../api/.env.local' });

const messageSchema = Schema({
    sender: String,
    message: String,
    timestamp: { type: Date, default: Date.now },
});
const chatSchema = Schema({
    _id: {
        type: [String],
        required: true,
        unique: true,
    },
    messages: [messageSchema],
});

const Chat = model('Chat', chatSchema);

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

dbConnection.on('connected', async () => {
    await Chat.init();
});

export default Chat;
