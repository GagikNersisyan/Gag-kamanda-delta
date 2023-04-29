/* eslint-disable no-param-reassign */
import { ServiceError } from '../../utils/error-handling.js';
import {
  getUsersRepo,
  getUserByIdRepo,
  getUserByUsernameRepo as getUserByEmailRepo,
  createUserRepo,
  updateUserByIdRepo,
  deleteUserByIdRepo,
  // changePasswordUserByIdRepo,
} from './user.repo.js';
import { hashPassword } from '../../services/bcrypt.js';

export const getUsersService = async () => {
  const got = await getUsersRepo();
  return got;
};

export const getUserByIdService = async (id) => {
  const getOne = await getUserByIdRepo(id);
  console.log('getOne___', getOne);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('User not found', 403);
  }
  return getOne;
};

export const getUserByEmailOrFailService = async (username) => {
  const got = await getUserByEmailRepo(username);
  if (got == null || got.isDeleted) {
    throw new ServiceError('User not found', 403);
  }
  return got;
};

export const getUserByEmailService = async (username) => {
  const got = await getUserByEmailRepo(username);
  return got;
};

export const createUserService = async (user) => {
  const got = await getUserByEmailService(user.email);
  if (got != null) {
    throw new ServiceError('Email Exists', 403);
  }
  const password = hashPassword(user.password);
  const created = await createUserRepo({
    ...user,
    password,
  });
  return created;
};

export const updateUserByIdService = async (id, user) => {
  const getOne = await getUserByIdRepo(id);
  if(getOne.role==='SUPER_ADMIN'){
    console.log("You can not update SUPER ADMIN");
  }
  const updated = await updateUserByIdRepo(id, user);
  return updated;
};

export const deleteUserByIdService = async (id) => {
  const getOne = await getUserByIdRepo(id);
  if(getOne.role==='SUPER_ADMIN'){
    console.log("You can not delete SUPER ADMIN");
  }
  const deleted = await deleteUserByIdRepo(id);
  return deleted;
};

export const createAdminService = async (user) => {
  const got = await getUserByEmailService(user.email);
  if (got != null) {
    throw new ServiceError('Email Exists', 403);
  }
  const password = hashPassword(user.password);
  const created = await createUserRepo({
    ...user,
    password,
  });
  return created;
};