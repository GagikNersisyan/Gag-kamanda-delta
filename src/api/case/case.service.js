import {
    getCasesRepo,
    getCaseByIdRepo,
    createCaseRepo,
    updateCaseByIdRepo,
    deleteCaseByIdRepo,
  } from './case.repo.js';
  
  export const getCasesService = async () => {
    const got = await getCasesRepo();
    return got;
  };
  
  export const getCaseByIdService = async (id) => {
    const got = await getCaseByIdRepo(id);
    return got;
  };
  
  export const createCaseService = async (Case) => {
    const created = await createCaseRepo(Case);
    return created;
  };
  
  export const updateCaseByIdService = async (id, Case) => {
    const updated = await updateCaseByIdRepo(id, Case);
    return updated;
  };
  
  export const deleteCaseByIdService = async (id) => {
    const deleted = await deleteCaseByIdRepo(id);
    return deleted;
  };