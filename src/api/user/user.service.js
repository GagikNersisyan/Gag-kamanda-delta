import { ServiceError } from '../../utils/error-handling.js';
import {
  getUsersRepo,
  getUserByIdRepo,
  getUserByUsernameRepo,
  createUserRepo,
  updateUserByIdRepo,
  deleteUserByIdRepo,
} from './user.repo.js';
import { hashPassword } from '../../services/bcrypt.js';

export const getUsersService = async () => {
  const got = await getUsersRepo();
  return got;
};

export const getUserByIdService = async (id) => {
  const got = await getUserByIdRepo(id);
  return got;
};

export const getUserByUsernameService = async (username) => {
  const got = await getUserByUsernameRepo(username);
  return got;
};

export const createUserService = async (user) => {
  const got = await getUserByUsernameService(user.username);
  if (got != null) {
    throw new ServiceError('Username Exists', 403);
  }
  const password = hashPassword(user.password);
  const created = await createUserRepo({
    ...user,
    password,
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
