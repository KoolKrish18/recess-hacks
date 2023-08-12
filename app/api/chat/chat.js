import Chat from './chatModel';

// Post, Get, Put, Delete
export default function handler(req, res) {
	if (req.method === 'POST') {
		createChat(req, res);
	} else if (req.method === 'GET') {
		getChat(req, res);
	} else if (req.method === 'DELETE') {
		deleteChat(req, res);
	} else if (req.method === 'PUT') {
		updateChat(req, res);
	} else {
		res.status(405).end(); // Method Not Allowed
	}
}

async function createChat({ req, res }) {
	try {
		const chatData = req.body;
		const peopleEmails = req.body.people;
		const newChat = new Chat({
			...chatData,
			_id: peopleEmails,
		});
		await Chat.create(newChat);

		res.sendStatus(201);
	} catch (err) {
		res.status(500).json({ error: err });
	}
}

async function getChat({ req, res }) {
	try {
		const userEmail = req.query.email;
		const chatData = await Chat.findOne({ people: userEmail });

		res.status(200).json(chatData);
	} catch (err) {
		res.status(500).json({ error: err });
	}
}

async function deleteChat({ req, res }) {
	try {
		const userEmail = req.query.email;
		await Chat.findByIdAndDelete(chatId);

		res.sendStatus(200);
	} catch (err) {
		res.status(500).json({ error: err });
	}
}
