import {

    createUserAdditionalRepo,
    updateUserAdditionalByIdRepo,
    deleteUserAdditionalByIdRepo,
  } from './users-additional.repo.js';
  
  export const createUserAdditionalService = async (userAdditional) => {
    const created = await createUserAdditionalRepo(userAdditional);
    return created;
  };
  
  export const updateUserAdditionalByIdService = async (id, userAdditional) => {
    const updated = await updateUserAdditionalByIdRepo(id, userAdditional);
    return updated;
  };
  
  export const deleteUserAdditionalByIdService = async (id) => {
    const deleted = await deleteUserAdditionalByIdRepo(id);
    return deleted;
  };