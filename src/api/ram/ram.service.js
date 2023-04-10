import {
    getRamsRepo,
    getRamByIdRepo,
    createRamRepo,
    updateRamByIdRepo,
    deleteRamByIdRepo,
  } from './ram.repo.js';
  
  export const getRamsService = async () => {
    const got = await getRamsRepo();
    return got;
  };
  
  export const getRamByIdService = async (id) => {
    const got = await getRamByIdRepo(id);
    return got;
  };
  
  export const createRamService = async (Ram) => {
    const created = await createRamRepo(Ram);
    return created;
  };
  
  export const updateRamByIdService = async (id, Ram) => {
    const updated = await updateRamByIdRepo(id, Ram);
    return updated;
  };
  
  export const deleteRamByIdService = async (id) => {
    const deleted = await deleteRamByIdRepo(id);
    return deleted;
  };