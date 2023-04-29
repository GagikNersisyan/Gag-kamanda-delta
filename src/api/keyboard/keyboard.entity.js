import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { OPTIONS } from '../../utils/mongo-default.js';

const { Schema } = mongoose;

const Keyboard = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, OPTIONS);

Keyboard.plugin(softDeletePlugin);

export const Keyboards = mongoose.model('Keyboards', Keyboard);