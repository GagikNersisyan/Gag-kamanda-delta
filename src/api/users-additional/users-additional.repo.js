import { UserAdditionals } from './users-additional.entity.js';

export const createUserAdditionalRepo = async (userAdditional) =>
  UserAdditionals.create(userAdditional);

export const updateUserAdditionalByIdRepo = async (id, userAdditional) =>
  UserAdditionals.updateOne({ _id: id }, userAdditional);

export const deleteUserAdditionalByIdRepo = async (id) => UserAdditionals.deleteOne({ _id: id });