import { Pcs } from './pc.entity.js';

export const getPcs = async (projection, populate) =>
  Pcs.find({}, projection, { populate });

export const getPcId = async (id, projection, populate) =>
  Pcs.findOne({ _id: id }, projection, { populate });

export const createPc = async (Pc) => Pcs.create(Pc);

export const updatePcId = async (id, Pc) => Pcs.updateOne({ _id: id }, Pc);

export const deletePcId = async (id) => Pcs.softDelete({ _id: id });