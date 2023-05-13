
/* eslint-disable no-param-reassign */
import { ServiceError } from '../../utils/error-handling.js';
import {
  getUsersRepo,
  getUserByIdRepo,
  getUserByUsernameRepo as getUserByEmailRepo,
  createUserRepo,
  updateUserByIdRepo,
  deleteUserByIdRepo,
  getUserByRoleRepo,
  // changePasswordUserByIdRepo,
} from './user.repo.js';
import { hashPassword } from '../../services/bcrypt.js';
import { compareNewPassword } from '../../services/bcrypt.js';

export const getUsersService = async () => {
  const got = await getUsersRepo();
  return got;
};

export const getUserByIdOrFailService = async (id) => {
  const getOne = await getUserByIdRepo(id);
  if (getOne == null || getOne.isDeleted) {
    throw new ServiceError('User not found', 403);
  }
  return getOne;
};

export const getUserByIdService = async (id) => {
  const getOne = await getUserByIdRepo(id);
  return getOne;
};

export const getUserByRoleService = async (role) => {
  const getOne = await getUserByRoleRepo(role);
  return getOne;
};

export const getUserByEmailOrFailService = async (email) => {
  const got = await getUserByEmailRepo(email);
  if (got == null || got.isDeleted) {
    throw new ServiceError('User not found', 403);
  }
  return got;
};

export const getUserByEmailService = async (username) => {
  const got = await getUserByEmailRepo(username);
  return got;
};

export const updateUserByIdService = async (id, user) => {
  const updated = await updateUserByIdRepo(id, user);
  return updated;
};

export const createUserService = async (user) => {
  const got = await getUserByEmailService(user.email);
  if (got != null && got.isDeleted) {
    await updateUserByIdService(got.id, { isDeleted: false, deletedAt: null });
    throw new ServiceError('You already have deleted account i revert it you can only signin', 403);
  } else if (got != null) {
    throw new ServiceError('Email Exists', 403);
  }

  const password = hashPassword(user.password);
  const created = await createUserRepo({
    ...user,
    password,
  });
  return created;
};

export const deleteUserByIdService = async (id, user) => {
  const deleted = await deleteUserByIdRepo(id, user);
  return deleted
};

export const changePasswordService = async (id, user) => {
  const got = await getUserByIdRepo(id);
  if (got == null || got.isDeleted) {
    throw new ServiceError('User not found', 403);
  }
  if (!(await compareNewPassword(user.newPassword, user.password))) {
    throw new ServiceError('unauthorized', 401);
  }

  const newPassword = hashPassword(user.newPassword);

  const updated = await updateUserByIdRepo(id, user)({
    ...user,
    newPassword
  }
  );
  return updated;
};



