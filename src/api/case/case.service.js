/* eslint-disable import/named */
import {
  getCasesRepo,
  getCaseByIdRepo,
  createCaseRepo,
  updateCaseByIdRepo,
  deleteCaseByIdRepo,
} from './case.repo.js';
import { ServiceError } from '../../utils/error-handling.js';

export const getCasesService = async () => {
  const got = await getCasesRepo(null, ['file']);
  return got;
};

export const getCaseByIdService = async (id) => {
  const getOne = await getCaseByIdRepo(id, null, ['file']);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('Case not found', 403);
  }
  return getOne;
};

export const createCaseService = async (cpu) => {
  const created = await createCaseRepo(cpu);
  return created;
};

export const updateCaseByIdService = async (id, cpu) => {
  const updated = await updateCaseByIdRepo(id, cpu);
  return updated;
};

export const deleteCaseByIdService = async (id) => {
  const deleted = await deleteCaseByIdRepo(id);
  return deleted;
};