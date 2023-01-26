import mongoose from 'mongoose';

const CreatedSchema = new mongoose.Schema(
	{
		challenge: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Challenge',
			required: true
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		}
	},
	{ timestamps: true }
);

export const CreatedChallenge =
	mongoose.models.CreatedChallenge || mongoose.model('CreatedChallenge', CreatedSchema);
