import mongoose from 'mongoose';

const completedSchema = new mongoose.Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	challenge: {
		type: mongoose.Types.ObjectId,
		ref: 'Challenge'
	}
});

export const CompletedChallenge =
	mongoose.models.Completed || mongoose.model('Completed', completedSchema);
