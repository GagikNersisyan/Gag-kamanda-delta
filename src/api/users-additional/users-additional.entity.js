import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserAdditional = new Schema({}, { strict: false });

export const UserAdditionals = mongoose.model('UserAdditionals', UserAdditional);