import { Schema, model } from 'mongoose';
const userSchema = Schema({
	_id: {
		type: String,
		required: true,
		unique: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	interests: {
		type: [String],
		required: false,
	},
	achievements: {
		type: [String],
		required: false,
	},
	level: {
		type: Number,
		default: false,
	},
	appointments: [{ type: Schema.ObjectId, ref: 'Appointment' }],
	chat: [{ type: Schema.ObjectId, ref: 'Chat' }],
});

const User = model('User', userSchema);

export default User;
