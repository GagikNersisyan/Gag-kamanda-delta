import mongoose from 'mongoose';

const { Schema } = mongoose;

const Keyboard = new Schema({
}, { strict: false });

export const Keyboards = mongoose.model('Keyboard', Keyboard);