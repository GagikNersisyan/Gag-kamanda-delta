import mongoose from 'mongoose';

const { Schema } = mongoose;

const Ram = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, { strict: false });

export const Rams = mongoose.model('Rams',Ram);