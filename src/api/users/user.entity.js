import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema;

const User = new Schema({
  id: ObjectId,
  name: String,
  username: String,
  email: String,
});

export const Users = mongoose.model('Users', User);