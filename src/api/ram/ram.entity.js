import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { OPTIONS } from '../../utils/mongo-default.js';

const { Schema } = mongoose;

const Ram = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, OPTIONS);

Ram.plugin(softDeletePlugin);

export const Rams = mongoose.model('Rams', Ram);