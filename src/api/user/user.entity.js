import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { OPTIONS } from '../../utils/mongo-default.js';

const { Schema } = mongoose;

const User = new Schema({
}, OPTIONS);

User.plugin(softDeletePlugin);

export const Users = mongoose.model('Users', User);