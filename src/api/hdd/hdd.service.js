/* eslint-disable import/named */
import {
  getHddsRepo,
  getHddByIdRepo,
  createHddRepo,
  updateHddByIdRepo,
  deleteHddByIdRepo,
} from './hdd.repo.js';
import { ServiceError } from '../../utils/error-handling.js';

export const getHddsService = async () => {
  const got = await getHddsRepo(null, ['file']);
  return got;
};

export const getHddByIdService = async (id) => {
  const getOne = await getHddByIdRepo(id, null, ['file']);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('HDD not found', 403);
  }
  return getOne;
};

export const createHddService = async (hdd) => {
  const created = await createHddRepo(hdd);
  return created;
};

export const updateHddByIdService = async (id, hdd) => {
  const updated = await updateHddByIdRepo(id, hdd);
  return updated;
};

export const deleteHddByIdService = async (id) => {
  const deleted = await deleteHddByIdRepo(id);
  return deleted;
};