import {
  deleteFileByIdService,
  createFileService,
  getFileByIdService,
  getFilesService,
  updateFileByIdService,
} from './file.service.js';

export const getFilesController = async (req, res) => {
  const files = await getFilesService();
  res.send(files);
};

export const getFileByIdController = async (req, res) => {
  const file = await getFileByIdService(req.params.id);
  res.send(file);
};

export const createFileController = async (req, res, next) => {
  try {
    const file = await createFileService(req.file);
    return res.send(file);
  } catch (err) {
    next(err);
  }
};

export const updateFileByIdController = async (req, res, next) => {
  try {
    const file = await updateFileByIdService(req.params.id, req.body);
    res.send(file);
  } catch (err) {
    next(err);
  }
};

export const deleteFileByIdController = async (req, res) => {
  const file = await deleteFileByIdService(req.params.id);
  res.send(file);
};