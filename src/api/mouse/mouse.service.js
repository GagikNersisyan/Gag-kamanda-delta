
import { ServiceError } from '../../utils/error-handling.js';
import {
  getMouseId,
  getMouses,
  createMouse,
  updateMouseId,
  deleteMouseId,
} from './mouse.repo.js';

export const getMousesService = async () => {
  const got = await getMouses(null, ['file']);
  return got;
};

export const getMouseByIdService = async (id) => {
  const getOne = await getMouseId(id, null, ['file']);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('Mouse not found', 403);
  }
  return getOne;
};

export const createMouseService = async (body) => {
  const created = await createMouse(body);
  return created;
};

export const updateMouseIdService = async (id) => {
  const updated = await updateMouseId(id);
  return updated;
};

export const deleteMouseIdService = async (id) => {
  const deleted = await deleteMouseId(id);
  return deleted;
};