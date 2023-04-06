import mongoose from 'mongoose';

const { Schema } = mongoose;

const Mouse = new Schema({
}, { strict: false });

export const Mouses = mongoose.model('Mouses', Mouse);