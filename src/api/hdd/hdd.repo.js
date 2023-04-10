import { Hdds } from './hdd.entity.js';

export const getHddsRepo = async (projection, populate) =>
  Hdds.find({}, projection, { populate });

export const getHddByIdRepo = async (id, projection, populate) =>
  Hdds.findOne({ _id: id }, projection, { populate });

export const createHddRepo = async (Hdd) => Hdds.create(Hdd);

export const updateHddByIdRepo = async (id, Hdd) => Hdds.updateOne({ _id: id }, Hdd);

export const deleteHddByIdRepo = async (id) => Hdds.deleteOne({ _id: id });