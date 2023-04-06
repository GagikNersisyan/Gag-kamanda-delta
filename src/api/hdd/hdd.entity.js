import mongoose from 'mongoose';

const { Schema } = mongoose;

const Case = new Schema({
}, { strict: false });

export const Cases = mongoose.model('Case', Case);