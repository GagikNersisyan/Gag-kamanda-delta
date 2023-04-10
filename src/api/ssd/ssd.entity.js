import mongoose from 'mongoose';

const { Schema } = mongoose;

const Ssd = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, { strict: false });

export const Ssds = mongoose.model('Ssds', Ssd);