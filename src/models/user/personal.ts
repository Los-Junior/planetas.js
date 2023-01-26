import mongoose, { Schema, model } from 'mongoose';

export interface UserPersonalInfoI {
	user: string;
	name: string;
	location: string;
	bio: string;
	website: string;
	github: string;
	showEmail: boolean;
	lastSeen: String;
}

const personalSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	location: String,
	bio: String,
	website: String,
	github: String,
	showEmail: Boolean,
	lastSeen: {
		type: Date,
		required: true
	}
});

export const Personal = mongoose.models.Personal || model('Personal', personalSchema);
