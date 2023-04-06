import {
    getKeyboardsRepo,
    getKeyboardByIdRepo,
    createKeyboardRepo,
    updateKeyboardByIdRepo,
    deleteKeyboardByIdRepo,
  } from './keyboard.repo.js';
  
  export const getKeyboardsService = async () => {
    const got = await getKeyboardsRepo();
    return got;
  };
  
  export const getKeyboardByIdService = async (id) => {
    const got = await getKeyboardByIdRepo(id);
    return got;
  };
  
  export const createKeyboardService = async (Keyboard) => {
    const created = await createKeyboardRepo(Keyboard);
    return created;
  };
  
  export const updateKeyboardByIdService = async (id, Keyboard) => {
    const updated = await updateKeyboardByIdRepo(id, Keyboard);
    return updated;
  };
  
  export const deleteKeyboardByIdService = async (id) => {
    const deleted = await deleteKeyboardByIdRepo(id);
    return deleted;
  };