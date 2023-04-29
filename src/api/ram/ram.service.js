
/* eslint-disable import/named */
import {
  getRamsRepo,
  getRamByIdRepo,
  createRamRepo,
  updateRamByIdRepo,
  deleteRamByIdRepo,
} from './ram.repo.js';
import { ServiceError } from '../../utils/error-handling.js';

export const getRamsService = async () => {
  const got = await getRamsRepo(null, ['file']);
  return got;
};

export const getRamByIdService = async (id) => {
  const getOne = await getRamByIdRepo(id, null, ['file']);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('Ram not found', 403);
  }
  return getOne;
};

export const createRamService = async (cpu) => {
  const created = await createRamRepo(cpu);
  return created;
};

export const updateRamByIdService = async (id, cpu) => {
  const updated = await updateRamByIdRepo(id, cpu);
  return updated;
};

export const deleteRamByIdService = async (id) => {
  const deleted = await deleteRamByIdRepo(id);
  return deleted;
};