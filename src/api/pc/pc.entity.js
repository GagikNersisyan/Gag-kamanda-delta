import mongoose from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { OPTIONS } from '../../utils/mongo-default.js';

const { Schema } = mongoose;

const Pc = new Schema({
  mouse: { type: Schema.Types.ObjectId, ref: 'Mouse' },
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
  hdd: { type: Schema.Types.ObjectId, ref: 'Hdd' },
  keyboard: { type: Schema.Types.ObjectId, ref: 'Keyboard' },
  ram: { type: Schema.Types.ObjectId, ref: 'Ram' },
  case: { type: Schema.Types.ObjectId, ref: 'Case' },
  ssd: { type: Schema.Types.ObjectId, ref: 'Ssd' },
},OPTIONS);

Pc.plugin(softDeletePlugin);

export const Pcs = mongoose.model('Pcs', Pc);