import mongoose, { Schema, model } from 'mongoose';

const CreatedSchema = new Schema(
	{
		challenge: {
			type: Schema.Types.ObjectId,
			ref: 'Challenge',
			required: true
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		}
	},
	{ timestamps: true }
);

export const CreatedChallenge =
	mongoose.models.CreatedChallenge || model('CreatedChallenge', CreatedSchema);
