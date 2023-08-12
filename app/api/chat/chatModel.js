import { Schema, model } from 'mongoose';
const chatSchema = Schema({
	people: [
		{
			type: mongoose.Schema.Types.ObjectId, // This will store the _id of the author
			ref: 'User', // This refers to the 'User' model
			required: true,
		},
	],
	messages: [messageSchema],
});

const messageSchema = new mongoose.Schema({
	sender: String,
	message: String,
	timestamp: { type: Date, default: Date.now },
});

const Chat = model('Chat', chatSchema);

export default Chat;
