import { Ssds } from './ssd.entity.js';

export const getSsdsRepo = async (projection, populate) =>
  Ssds.find({}, projection, { populate });

export const getSsdByIdRepo = async (id, projection, populate) =>
  Ssds.findOne({ _id: id }, projection, { populate });

export const createSsdRepo = async (Ssd) => Ssds.create(Ssd);

export const updateSsdByIdRepo = async (id, Ssd) => Ssds.updateOne({ _id: id }, Ssd);

export const deleteSsdByIdRepo = async (id) => Ssds.deleteOne({ _id: id });