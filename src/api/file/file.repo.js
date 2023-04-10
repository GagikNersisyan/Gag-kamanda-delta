import { Files } from './file.entity.js';

export const getFilesRepo = async (projection, populate) =>
  Files.find({}, projection, { populate });

export const getFileByIdRepo = async (id, projection, populate) =>
  Files.findOne({ _id: id }, projection, { populate });

export const getFileByFilenameRepo = async (filename, projection) =>
  Files.findOne({ filename }, projection);

export const createFileRepo = async (file) => Files.create(file);

export const updateFileByIdRepo = async (id, file) => Files.updateOne({ _id: id }, file);

export const deleteFileByIdRepo = async (id) => Files.deleteOne({ _id: id });