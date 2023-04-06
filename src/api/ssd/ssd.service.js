import {
    getSsdsRepo,
    getSsdByIdRepo,
    createSsdRepo,
    updateSsdByIdRepo,
    deleteSsdByIdRepo,
  } from './ssd.repo.js';
  
  export const getSsdsService = async () => {
    const got = await getSsdsRepo();
    return got;
  };
  
  export const getSsdByIdService = async (id) => {
    const got = await getSsdByIdRepo(id);
    return got;
  };
  
  export const createSsdService = async (Ssd) => {
    const created = await createSsdRepo(Ssd);
    return created;
  };
  
  export const updateSsdByIdService = async (id, Ssd) => {
    const updated = await updateSsdByIdRepo(id, Ssd);
    return updated;
  };
  
  export const deleteSsdByIdService = async (id) => {
    const deleted = await deleteSsdByIdRepo(id);
    return deleted;
  };