import mongoose from 'mongoose';

const { Schema } = mongoose;

const Hdd = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, { strict: false });

export const Hdds = mongoose.model('Hdds', Hdd);