import {
    getMousesRepo,
    getMouseByIdRepo,
    createMouseRepo,
    updateMouseByIdRepo,
    deleteMouseByIdRepo,
  } from './mouse.repo.js';
  
  export const getMousesService = async () => {
    const got = await getMousesRepo();
    return got;
  };
  
  export const getMouseByIdService = async (id) => {
    const got = await getMouseByIdRepo(id);
    return got;
  };
  
  export const createMouseService = async (Mouse) => {
    const created = await createMouseRepo(Mouse);
    return created;
  };
  
  export const updateMouseByIdService = async (id, Mouse) => {
    const updated = await updateMouseByIdRepo(id, Mouse);
    return updated;
  };
  
  export const deleteMouseByIdService = async (id) => {
    const deleted = await deleteMouseByIdRepo(id);
    return deleted;
  };