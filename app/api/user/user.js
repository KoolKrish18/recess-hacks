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
	let userId = req.body.id;
	try {
		const newUser = new User({ ...body, _id: userId });
		await newUser.save();
		res.sendStatus(200);
	} catch (err) {
		res.status(500).send({ error: 'Failed to create user' });
	}
}

async function getUser({ req, res }) {
	try {
		const id = req.query.id;
		const user = await User.findById(id, function (err, docs) {
			if (err) {
				console.log(err);
			} else {
				return docs;
			}
		});
		res.status(200).send(user);
	} catch (err) {
		res.status(500).send({ error: 'Failed to get users' });
	}
}

async function deleteUser({ req, res }) {
	try {
		const id = req.query.id;
		await User.findByIdAndDelete(id);
		res.sendStatus(200);
	} catch (err) {
		res.status(500).send({ error: 'Failed to delete user' });
	}
}

// TODO This needs to be fixed lol
async function updateUser({ req, res }) {
	try {
		const id = req.query.id;
		const newData = req.body;

		await User.findByIdAndUpdate(id, newData);
		res.sendStatus(200);
	} catch (err) {
		res.status(500).send({ error: 'Failed to update user' });
	}
}
