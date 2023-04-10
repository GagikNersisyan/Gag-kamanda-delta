import { Rams } from './ram.entity.js';

export const getRamsRepo = async (projection, populate) =>
  Rams.find({}, projection, { populate });

export const getRamByIdRepo = async (id, projection, populate) =>
  Rams.findOne({ _id: id }, projection, { populate });

export const getRamByRamnameRepo = async (Ramname, projection) =>
  Rams.findOne({ Ramname }, projection);

export const createRamRepo = async (Ram) => Rams.create(Ram);

export const updateRamByIdRepo = async (id, Ram) => Rams.updateOne({ _id: id }, Ram);

export const deleteRamByIdRepo = async (id) => Rams.deleteOne({ _id: id });