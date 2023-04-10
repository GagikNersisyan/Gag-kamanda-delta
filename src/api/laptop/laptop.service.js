import {
  getLaptopsRepo,
  getLaptopByIdRepo,
  createLaptopRepo,
  updateLaptopByIdRepo,
  deleteLaptopByIdRepo,
} from './laptop.repo.js';

export const getLaptopsService = async () => {
  const got = await getLaptopsRepo(null, ['file']);
  return got;
};

export const getLaptopByIdService = async (id) => {
  const got = await getLaptopByIdRepo(id, null, ['file']);
  return got;
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