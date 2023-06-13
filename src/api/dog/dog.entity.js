import mongoose from "mongoose";
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { OPTIONS } from '../../utils/mongo-default.js';

const { Schema } = mongoose;

const Dog = new Schema({
    file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, OPTIONS);

Dog.plugin(softDeletePlugin);

export const Dogs = mongoose.model('Dogs',Dog);

