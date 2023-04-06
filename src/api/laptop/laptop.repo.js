import { Laptops } from './laptop.entity.js';

export const getLaptopsRepo = async (projection, populate) =>
  Laptops.find({}, projection, { populate });

export const getLaptopByIdRepo = async (id, projection, populate) =>
  Laptops.findOne({ _id: id }, projection, { populate });

export const createLaptopRepo = async (laptop) => Laptops.create(laptop);

export const updateLaptopByIdRepo = async (id, laptop) => Laptops.updateOne({ _id: id }, laptop);

export const deleteLaptopByIdRepo = async (id) => Laptops.deleteOne({ _id: id });