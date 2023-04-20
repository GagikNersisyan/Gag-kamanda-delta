import {
  getKeyboardsRepo,
  getKeyboardByIdRepo,
  createKeyboardRepo,
  updateKeyboardByIdRepo,
  deleteKeyboardByIdRepo,
} from './keyboard.repo.js';

export const getKeyboardsService = async () => {
  const got = await getKeyboardsRepo(null, ['file']);
  return got;
};

export const getKeyboardByIdService = async (id) => {
  const got = await getKeyboardByIdRepo(id, null, ['file']);
  return got;
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