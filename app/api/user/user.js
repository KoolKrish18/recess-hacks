import User from '../user/userModel';

// Post, Get, Put, Delete
export default function handler(req, res) {
	if (req.method === 'POST') {
		createUser(req, res);
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

async function createUser({ req, res }) {
	let body = req.body;
	try {
		const newUser = new User(body);
		await newUser.save();
		res.sendStatus(200);
	} catch (err) {
		res.status(500).send({ error: 'Failed to create user' });
	}
}

async function getUser({ req, res }) {
	try {
		const email = req.query.email;
		const user = await User.findOne({ email });
		res.status(200).send(user);
	} catch (err) {
		res.status(500).send({ error: 'Failed to get users' });
	}
}

async function deleteUser({ req, res }) {
	try {
		const email = req.query.email;
		await User.findOneAndDelete({ email: email });
		res.sendStatus(200);
	} catch (err) {
		res.status(500).send({ error: 'Failed to delete user' });
	}
}

async function updateUser({ req, res }) {
	try {
		const email = req.query.email;
		await User.findOneAndUpdate(
			{ email: email }, // Find the user by their email
			{ $set: newData } // Update the user data
		);
		res.sendStatus(200);
	} catch (err) {
		res.status(500).send({ error: 'Failed to update user' });
	}
}
