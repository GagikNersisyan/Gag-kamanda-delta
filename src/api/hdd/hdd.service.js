import {
    getHddsRepo,
    getHddByIdRepo,
    createHddRepo,
    updateHddByIdRepo,
    deleteHddByIdRepo,
  } from './hdd.repo.js';
  
  export const getHddsService = async () => {
    const got = await getHddsRepo();
    return got;
  };
  
  export const getHddByIdService = async (id) => {
    const got = await getHddByIdRepo(id);
    return got;
  };
  
  export const createHddService = async (Hdd) => {
    const created = await createHddRepo(Hdd);
    return created;
  };
  
  export const updateHddByIdService = async (id, Hdd) => {
    const updated = await updateHddByIdRepo(id, Hdd);
    return updated;
  };
  
  export const deleteHddByIdService = async (id) => {
    const deleted = await deleteHddByIdRepo(id);
    return deleted;
  };