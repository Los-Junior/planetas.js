import mongoose, { Schema, model } from 'mongoose';

const completedSchema = new Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	challenge: {
		type: mongoose.Types.ObjectId,
		ref: 'Challenge'
	}
});

export const CompletedChallenge = mongoose.models.Completed || model('Completed', completedSchema);
