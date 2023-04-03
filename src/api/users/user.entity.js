import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
  userAdditional: { type: Schema.Types.ObjectId, ref: 'UserAdditionals' },
}, { strict: false });

export const Users = mongoose.model('Users', User);