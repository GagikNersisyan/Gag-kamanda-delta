
import { HDDs } from './hdd.entity.js';

export const getHddsRepo = async (projection, populate) =>
  HDDs.find({}, projection, { populate });

export const getHddByIdRepo = async (id, projection, populate) =>
  HDDs.findOne({ _id: id }, projection, { populate });

export const createHddRepo = async (hdd) => HDDs.create(hdd);

export const updateHddByIdRepo = async (id, hdd) => HDDs.updateOne({ _id: id }, hdd);

export const deleteHddByIdRepo = async (id) => HDDs.softDelete({ _id: id });