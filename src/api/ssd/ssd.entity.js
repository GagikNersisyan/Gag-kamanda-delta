import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { OPTIONS } from '../../utils/mongo-default.js';

const { Schema } = mongoose;

const SSD = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, OPTIONS);

SSD.plugin(softDeletePlugin);

export const SSDs = mongoose.model('SSDs', SSD);