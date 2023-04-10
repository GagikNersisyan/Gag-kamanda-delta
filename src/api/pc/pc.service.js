import {
    getPcsRepo,
    getPcByIdRepo,
    createPcRepo,
    updatePcByIdRepo,
    deletePcByIdRepo,
  } from './pc.repo.js';
  
  export const getPcsService = async () => {
    const got = await getPcsRepo();
    return got;
  };
  
  export const getPcByIdService = async (id) => {
    const got = await getPcByIdRepo(id);
    return got;
  };
  
  export const createPcService = async (Pc) => {
    const created = await createPcRepo(Pc);
    return created;
  };
  
  export const updatePcByIdService = async (id, Pc) => {
    const updated = await updatePcByIdRepo(id, Pc);
    return updated;
  };
  
  export const deletePcByIdService = async (id) => {
    const deleted = await deletePcByIdRepo(id);
    return deleted;
  };