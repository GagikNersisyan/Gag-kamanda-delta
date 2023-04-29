import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { OPTIONS } from '../../utils/mongo-default.js';

const { Schema } = mongoose;

const Mouse = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, OPTIONS);

Mouse.plugin(softDeletePlugin);

export const Mouses = mongoose.model('Mouses', Mouse);