
import { ServiceError } from '../../utils/error-handling.js';
import {
  getPcId,
  getPcs,
  createPc,
  updatePcId,
  deletePcId,
} from './pc.repo.js';

export const getPcsService = async () => {
  const got = await getPcs(null, ['file']);
  return got;
};

export const getPcByIdService = async (id) => {
  const getOne = await getPcId(id, null, ['file']);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('Pc not found', 403);
  }
  return getOne;
};

export const createPcService = async (body) => {
  const created = await createPc(body);
  return created;
};

export const updatePcIdService = async (id) => {
  const updated = await updatePcId(id);
  return updated;
};

export const deletePcIdService = async (id) => {
  const deleted = await deletePcId(id);
  return deleted;
};