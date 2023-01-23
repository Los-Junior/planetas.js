import mongoose, { Schema, model } from 'mongoose';

const challengeSchema = new Schema(
	{
		name: String,
		description: String,
		difficulty: String,
		image: String,
		solution: String,
		initialFunction: String,
		language: String,
		functionArguments: [{ type: mongoose.Schema.Types.Mixed }],
		fnResult: String,
		testFile: String,
		isHomePage: Boolean,
		order: Number
	},
	{ timestamps: true }
);

export const Challenge = mongoose.models.Challenge || model('Challenge', challengeSchema);
