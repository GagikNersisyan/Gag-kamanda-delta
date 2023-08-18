import { createDogByRepo, getDogByRepo, getDogsByRepo, updateDogByRepo, deleteDogByRepo } from "./dog.repo.js";

import { ServiceError } from '../../utils/error-handling.js';

export const getDogsByService = async () => {
    const get = await getDogsByRepo(null, ['file']);
    return get;
};

export const getDogByService = async (id) => {
    const getOne = await getDogByRepo(id, null, ['file']);
    if (getOne == null || getOne.isDeleted) {
        throw new ServiceError("Dog is not found")
    }
    return getOne;
};

export const createDogByService = async (Dog) => {
    const created = await createDogByRepo(Dog);
    return created;
};

export const updateDogByService = async (id, Dog) => {
    const updated = await updateDogByRepo(id, Dog);
    return updated;
};

export const deleteDogByRepo = async (id) =>{
    const deleted = await deleteDogByRepo(id);
    return deleted;
};

