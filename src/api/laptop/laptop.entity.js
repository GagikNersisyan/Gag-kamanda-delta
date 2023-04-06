import mongoose from 'mongoose';

const { Schema } = mongoose;

const Laptop = new Schema({
}, { strict: false });

export const Laptops = mongoose.model('Laptops', Laptop);