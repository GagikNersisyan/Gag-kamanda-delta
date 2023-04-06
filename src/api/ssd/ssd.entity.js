import mongoose from 'mongoose';

const { Schema } = mongoose;

const Ssd = new Schema({
}, { strict: false });

export const Ssds = mongoose.model('Ssds', Ssd);