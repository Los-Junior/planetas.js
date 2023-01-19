import mongoose, { Schema, model } from 'mongoose';

const completedSchema = new Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	challengeId: {
		type: String
	}
});
