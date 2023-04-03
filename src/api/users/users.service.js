import { ServiceError } from '../../utils/error-handling.js';
import {
  getUsersRepo,
  getUserByIdRepo,
  getUserByUsernameRepo,
  createUserRepo,
  updateUserByIdRepo,
  deleteUserByIdRepo,
} from './user.repo.js';

import { createUserAdditionalService } from '../users-additional/users-additional.service.js';

export const getUsersService = async () => {
  const got = await getUsersRepo(null, ['userAdditional']);
  return got;
};

export const getUserByIdService = async (id) => {
  const got = await getUserByIdRepo(id, null, ['userAdditional']);
  return got;
};

export const createUserService = async (user) => {
  const { school, ...rest } = user;

  const got = await getUserByUsernameRepo(rest.username, ['id']);
  if (got != null) {
    throw new ServiceError('Username Exists', 403);
  }

  const additionalData = await createUserAdditionalService({ school });
  const created = await createUserRepo({
    ...rest,
    userAdditional: additionalData.id,
  });
  return created;
};

export const updateUserByIdService = async (id, user) => {
  const updated = await updateUserByIdRepo(id, user);
  return updated;
};

export const deleteUserByIdService = async (id) => {
  const deleted = await deleteUserByIdRepo(id);
  return deleted;
};