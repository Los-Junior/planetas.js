import mongoose, { Schema, model } from 'mongoose';

const challengeSchema = new Schema(
	{
		name: String,
		description: String,
		difficulty: String,
		image: String,
		solution: String,
		initialCode: String,
		language: String,
		fnInput: String,
		fnResult: String,
		testFile: String,
		isHomePage: Boolean,
		order: Number
	},
	{ timestamps: true }
);

export const Challenge = mongoose.models.Challenge || model('Challenge', challengeSchema);
