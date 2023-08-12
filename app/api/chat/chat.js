// Updates the chat object in the user model
// We probably should have a separate document for chats, but it's fineeee
import User from '../user/userModel';
import Chat from './chatModel';

// Post, Get, Put, Delete
export default function handler(req, res) {
	if (req.method === 'POST') {
		createChat(req, res);
	} else if (req.method === 'GET') {
		getUser(req, res);
	} else if (req.method === 'DELETE') {
		deleteUser(req, res);
	} else if (req.method === 'PUT') {
		updateUser(req, res);
	} else {
		res.status(405).end(); // Method Not Allowed
	}
}

async function createChat({ req, res }) {
	try {
		const chatData = req.body;
		const chat = await Chat.create(chatData);
	} catch (err) {
		res.status(500).json({ error: err });
	}
}
