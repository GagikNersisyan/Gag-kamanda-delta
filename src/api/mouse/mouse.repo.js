import { Mouses } from './mouse.entity.js';

export const getMouses = async (projection, populate) =>
  Mouses.find({}, projection, { populate });

export const getMouseId = async (id, projection, populate) =>
  Mouses.findOne({ _id: id }, projection, { populate });

export const createMouse = async (mouse) => Mouses.create(mouse);

export const updateMouseId = async (id, mouse) => Mouses.updateOne({ _id: id }, mouse);

export const deleteMouseId = async (id) => Mouses.softDelete({ _id: id });