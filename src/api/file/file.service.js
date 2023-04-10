import { ServiceError } from '../../utils/error-handling.js';
import {
  getFilesRepo,
  getFileByIdRepo,
  getFileByFilenameRepo,
  createFileRepo,
  updateFileByIdRepo,
  deleteFileByIdRepo,
} from './file.repo.js';

export const getFilesService = async () => {
  const got = await getFilesRepo(null, ['fileAdditional']);
  return got;
};

export const getFileByIdService = async (id) => {
  const got = await getFileByIdRepo(id, null, ['fileAdditional']);
  return got;
};

export const createFileService = async (file) => {
  const got = await getFileByFilenameRepo(file.filename, ['id']);
  if (got != null) {
    throw new ServiceError('Filename Exists', 403);
  }

  const created = await createFileRepo(file);
  return created;
};

export const updateFileByIdService = async (id, file) => {
  const updated = await updateFileByIdRepo(id, file);
  return updated;
};

export const deleteFileByIdService = async (id) => {
  const deleted = await deleteFileByIdRepo(id);
  return deleted;
};