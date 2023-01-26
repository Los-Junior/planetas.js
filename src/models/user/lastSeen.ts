import mongoose from 'mongoose';

const LastSeenSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	date: {
		type: Date,
		required: true
	}
});

export const UserLastSeen = mongoose.models.LastSeen || mongoose.model('LastSeen', LastSeenSchema);
