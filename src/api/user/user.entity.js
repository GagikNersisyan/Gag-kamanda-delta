import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
}, { strict: false });

export const Users = mongoose.model('Users', User);