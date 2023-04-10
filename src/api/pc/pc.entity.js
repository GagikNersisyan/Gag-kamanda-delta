import mongoose from 'mongoose';

const { Schema } = mongoose;

const Pc = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, { strict: false });

export const Pcs = mongoose.model('Pcs', Pc);