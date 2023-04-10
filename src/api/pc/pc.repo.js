import { Pcs } from './pc.entity.js';

export const getPcsRepo = async (projection, populate) =>
  Pcs.find({}, projection, { populate });

export const getPcByIdRepo = async (id, projection, populate) =>
  Pcs.findOne({ _id: id }, projection, { populate });

export const createPcRepo = async (Pc) => Pcs.create(Pc);

export const updatePcByIdRepo = async (id, Pc) => Pcs.updateOne({ _id: id }, Pc);

export const deletePcByIdRepo = async (id) => Pcs.deleteOne({ _id: id });