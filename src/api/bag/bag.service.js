
import { ServiceError } from '../../utils/error-handling.js';
import {
  getBagId,
  getBags,
  createBag,
  updateBagId,
  deleteBagId,
} from './bag.repo.js';

export const getBagsService = async () => {
  const got = await getBags(null, ['file']);
  return got;
};

export const getBagByIdService = async (id) => {
  const getOne = await getBagId(id, null, ['file']);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('Bag not found', 403);
  }
  return getOne;
};

export const createBagService = async (body) => {
  const created = await createBag(body);
  return created;
};

export const updateBagIdService = async (id) => {
  const updated = await updateBagId(id);
  return updated;
};

export const deleteBagIdService = async (id) => {
  const deleted = await deleteBagId(id);
  return deleted;
};