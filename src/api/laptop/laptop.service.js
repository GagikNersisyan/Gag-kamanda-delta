
import {
  getLaptopsRepo,
  getLaptopByIdRepo,
  createLaptopRepo,
  updateLaptopByIdRepo,
  deleteLaptopByIdRepo,
} from './laptop.repo.js';
import { ServiceError } from '../../utils/error-handling.js';

export const getLaptopsService = async () => {
  const got = await getLaptopsRepo(null, ['file']);
  return got;
};

export const getLaptopByIdService = async (id) => {
  const getOne = await getLaptopByIdRepo(id, null, ['file']);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('Laptop not found', 403);
  }
  return getOne;
};

export const createLaptopService = async (laptop) => {
  const created = await createLaptopRepo(laptop);
  return created;
};

export const updateLaptopByIdService = async (id, laptop) => {
  const updated = await updateLaptopByIdRepo(id, laptop);
  return updated;
};

export const deleteLaptopByIdService = async (id) => {
  const deleted = await deleteLaptopByIdRepo(id);
  return deleted;
};