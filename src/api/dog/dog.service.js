import { getDogsRepo, getDogRepo, createDogRepo, updateDogByIdRepo, deleteDogByIdRepo } from './dog.repo.js';
import { ServiceError } from '../../utils/error-handling.js';

export const getDogsService = async () => {
    const got = await getDogsRepo(null, ['file'])
    return got;
};

export const getDogService = async (id) => {
    const getOne = await getDogRepo(id, null, ['file'])
    if (getOne == null || getOne.isDeleted) {
        throw new ServiceError('Dog is not found', 403);
    }
    return getOne;
};

export const createDogService = async (dog) => {
    const created = await createDogRepo(dog)
    return created;
};

export const updateDogService = async (id, dog) => {
    const updated = await updateDogByIdRepo(id, dog)
    return updated;
};

export const deleteDogService = async (id) => {
    const deleted = await deleteDogByIdRepo(id)
    return deleted;
}