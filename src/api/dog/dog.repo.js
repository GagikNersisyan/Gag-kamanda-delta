import { Dogs } from './dog.entity'

export const getDogsByRepo = async (projection, populate) =>
    Dogs.find({}, projection, { populate });

export const getDogByRepo = async (id, projection, populate) =>
    Dogs.findOne({ _id: id }, projection, { populate });

export const createDogByRepo = async (Dog) => Dogs.create(Dog);

export const updateDogByRepo = async (id, Dog) => Dogs.updateOne(id, Dog);

export const deleteDogByRepo = async (id) => Dogs.softDelete({ _id :id})