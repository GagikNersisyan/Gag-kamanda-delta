import mongoose from 'mongoose';

const { Schema } = mongoose;

const Case = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, { strict: false });

export const Cases = mongoose.model('Cases', Case);