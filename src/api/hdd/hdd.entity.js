import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { OPTIONS } from '../../utils/mongo-default.js';

const { Schema } = mongoose;

const HDD = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, OPTIONS);

HDD.plugin(softDeletePlugin);

export const HDDs = mongoose.model('HDDs', HDD);