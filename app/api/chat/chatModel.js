import { Schema, model } from 'mongoose';
const chatSchema = Schema({
	_id: {
		type: [String],
		required: true,
		unique: true,
	},
	messages: [messageSchema],
});

const messageSchema = new mongoose.Schema({
	sender: String,
	message: String,
	timestamp: { type: Date, default: Date.now },
});

const Chat = model('Chat', chatSchema);

export default Chat;
