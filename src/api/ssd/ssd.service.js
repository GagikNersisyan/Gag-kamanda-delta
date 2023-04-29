
/* eslint-disable import/named */
import {
  getSsdsRepo,
  getSsdByIdRepo,
  createSsdRepo,
  updateSsdByIdRepo,
  deleteSsdByIdRepo,
} from './ssd.repo.js';
import { ServiceError } from '../../utils/error-handling.js';

export const getSsdsService = async () => {
  const got = await getSsdsRepo(null, ['file']);
  return got;
};

export const getSsdByIdService = async (id) => {
  const getOne = await getSsdByIdRepo(id, null, ['file']);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('SSD not found', 403);
  }
  return getOne;
};

export const createSsdService = async (cpu) => {
  const created = await createSsdRepo(cpu);
  return created;
};

export const updateSsdByIdService = async (id, cpu) => {
  const updated = await updateSsdByIdRepo(id, cpu);
  return updated;
};

export const deleteSsdByIdService = async (id) => {
  const deleted = await deleteSsdByIdRepo(id);
  return deleted;
};