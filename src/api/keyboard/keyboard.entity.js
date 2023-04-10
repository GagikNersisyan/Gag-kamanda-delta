import mongoose from 'mongoose';

const { Schema } = mongoose;

const Keyboard = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, { strict: false });

export const Keyboards = mongoose.model('Keyboards', Keyboard);