import User from '../user/userModel';

export default function handler(req, res) {
	if (req.method === 'POST') {
		// Process a POST request
		createUser(req, res);
	} else {
		// Handle any other HTTP method
	}
}

function createUser({ req, res }) {
	let body = req.body;
	try {
		const newUser = new User(body);
		res.sendStatus(200);
	} catch (err) {
		res.status(500).send({ error: 'Failed to create user' });
	}
}
