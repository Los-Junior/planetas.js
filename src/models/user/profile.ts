import type { Profile, User } from '@auth/core/types';
import mongoose, { Schema, model, Model, Document } from 'mongoose';
import { Personal, type UserPersonalInfoI } from './personal';

interface UserProfileI {
	user: string | User;
	personal: string | UserPersonalInfoI;
}

interface ProfileModelI extends Model<UserProfileI> {
	createNew(userId: string): Promise<Document<any, null, UserProfileI>>;
	updateLastSeen(userId: string): Promise<Document<any, null, UserProfileI>>;
}

const profileSchema = new Schema<UserProfileI, ProfileModelI>(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		personal: {
			type: Schema.Types.ObjectId,
			ref: 'Personal'
		}
	},
	{ timestamps: true }
);

profileSchema.static('createNew', async function (userId) {
	const personal = await Personal.create({ user: userId, lastSeen: new Date() });

	const newProfile = new this({ user: userId, personal: personal._id }) as any;
	return newProfile.save();
});

profileSchema.static('updateLastSeen', async function (userId) {
	const profile = await this.findOne({ user: userId });
	await Personal.findByIdAndUpdate(profile?.personal, { lastSeen: new Date() }, { new: true });
	return profile;
});

export const UserProfile =
	(mongoose.models.UserProfile as ProfileModelI) ||
	model<UserProfileI, ProfileModelI>('UserProfile', profileSchema);
