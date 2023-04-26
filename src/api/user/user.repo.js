import { Users } from './user.entity.js';

export const getUsersRepo = async (projection, populate) =>
  Users.find({}, projection, { populate });

export const getUserByIdRepo = async (id, projection, populate) =>
  Users.findOne({ _id: id }, projection, { populate });

export const getUserByUsernameRepo = async (email, projection) =>
  Users.findOne({ email }, projection);

export const createUserRepo = async (user) => Users.create(user);

export const updateUserByIdRepo = async (id, user) => Users.updateOne({ _id: id }, user);

export const deleteUserByIdRepo = async (id) => Users.softDelete({ _id: id });