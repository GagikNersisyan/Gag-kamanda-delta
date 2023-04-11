import mongoose from 'mongoose';

const { Schema } = mongoose;

const File = new Schema({
}, { strict: false });

export const Files = mongoose.model('Files', File);