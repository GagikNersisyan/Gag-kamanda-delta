import { SSDs } from './ssd.entity.js';

export const getSsdsRepo = async (projection, populate) =>
  SSDs.find({}, projection, { populate });

export const getSsdByIdRepo = async (id, projection, populate) =>
  SSDs.findOne({ _id: id }, projection, { populate });

export const createSsdRepo = async (ssd) => SSDs.create(ssd);

export const updateSsdByIdRepo = async (id, ssd) => SSDs.updateOne({ _id: id }, ssd);

export const deleteSsdByIdRepo = async (id) => SSDs.softDelete({ _id: id });