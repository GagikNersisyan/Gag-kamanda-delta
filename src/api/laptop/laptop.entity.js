import mongoose from 'mongoose';

const { Schema } = mongoose;

const Laptop = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, { strict: false });

export const Laptops = mongoose.model('Laptops', Laptop);