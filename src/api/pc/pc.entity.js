import mongoose from 'mongoose';

const { Schema } = mongoose;

const Pc = new Schema({
  mouse: { type: Schema.Types.ObjectId, ref: 'Mouse' },
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
  hdd: { type: Schema.Types.ObjectId, ref: 'Hdd' },
  cpu: { type: Schema.Types.ObjectId, ref: 'Cpu' },
  keyboard: { type: Schema.Types.ObjectId, ref: 'Keyboard' },
  ram: { type: Schema.Types.ObjectId, ref: 'Ram' },
  case: { type: Schema.Types.ObjectId, ref: 'Case' },
  ssd: { type: Schema.Types.ObjectId, ref: 'Ssd' },
}, { strict: false });

export const Pcs = mongoose.model('Pcs', Pc);