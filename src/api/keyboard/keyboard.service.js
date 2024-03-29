
import {
  getKeyboardsRepo,
  getKeyboardByIdRepo,
  createKeyboardRepo,
  updateKeyboardByIdRepo,
  deleteKeyboardByIdRepo,
} from './keyboard.repo.js';
import { ServiceError } from '../../utils/error-handling.js';

export const getKeyboardsService = async () => {
  const got = await getKeyboardsRepo(null, ['file']);
  return got;
};

export const getKeyboardByIdService = async (id) => {
  const getOne = await getKeyboardByIdRepo(id, null, ['file']);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('Keyboard not found', 403);
  }
  return getOne;
};

export const createKeyboardService = async (keyboard) => {
  const created = await createKeyboardRepo(keyboard);
  return created;
};

export const updateKeyboardByIdService = async (id, keyboard) => {
  const updated = await updateKeyboardByIdRepo(id, keyboard);
  return updated;
};

export const deleteKeyboardByIdService = async (id) => {
  const deleted = await deleteKeyboardByIdRepo(id);
  return deleted;
};