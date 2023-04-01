import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema;

const Product = new Schema({
  id: ObjectId,
  name: String,
  productsname: String,
});

export const Products = mongoose.model('Products', Product);