import mongoose, { Schema, model } from 'mongoose';

const LastSeenSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	date: {
		type: Date,
		required: true
	}
});

export const UserLastSeen = mongoose.models.LastSeen || model('LastSeen', LastSeenSchema);
