import { Dogs } from './dog.entity.js';

export const getDogsRepo = async (projection, populate) =>
    Dogs.find({}, projection, { populate });

export const getDogRepo = async (id, projection, populate) =>
    Dogs.findOne({ _id: id }, projection, { populate });

export const createDogRepo = async (Dog) =>
    Dogs.create(Dog);

export const updateDogByIdRepo = async (id, Dog) =>
    Dogs.updateOne({ _id: id }, Dog);

export const deleteDogByIdRepo = async (id) =>
    Dogs.softDelete({ _id: id });
