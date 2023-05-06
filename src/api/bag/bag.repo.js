import { Bags } from './bag.entity.js';

export const getBags = async (projection, populate) =>
  Bags.find({}, projection, { populate });

export const getBagId = async (id, projection, populate) =>
  Bags.findOne({ _id: id }, projection, { populate });

export const createBag = async (Bag) => Bags.create(Bag);

export const updateBagId = async (id, Bag) => Bags.updateOne({ _id: id }, Bag);

export const deleteBagId = async (id) => Bags.softDelete({ _id: id });