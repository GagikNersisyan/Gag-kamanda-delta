import mongoose from 'mongoose';

const { Schema } = mongoose;

const Mouse = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, { strict: false });

export const Mouses = mongoose.model('Mouses', Mouse);