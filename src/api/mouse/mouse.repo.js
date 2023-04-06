import { Mouses } from './mouse.entity.js';

export const getMousesRepo = async (projection, populate) =>
  Mouses.find({}, projection, { populate });

export const getMouseByIdRepo = async (id, projection, populate) =>
  Mouses.findOne({ _id: id }, projection, { populate });

export const createMouseRepo = async (Mouse) => Mouses.create(Mouse);

export const updateMouseByIdRepo = async (id, Mouse) => Mouses.updateOne({ _id: id }, Mouse);

export const deleteMouseByIdRepo = async (id) => Mouses.deleteOne({ _id: id });