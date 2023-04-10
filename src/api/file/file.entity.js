import mongoose from 'mongoose';

const { Schema } = mongoose;

const File = new Schema({
  file: { type: Schema.Types.ObjectId, ref: 'Files' },
}, { strict: false });

export const Files = mongoose.model('Files', File);