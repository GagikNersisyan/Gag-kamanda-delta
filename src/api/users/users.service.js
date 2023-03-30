import { ServiceError } from '../../utils/error-handling.js';
import { Users } from './user.entity.js';

export const getUsersService = async () => {
  const got = await Users.find();
  return got;
};

export const getUserService = async (id) => {
  const got = await Users.findOne({ _id: id });
  return got;
};

export const createUserService = async (user) => {
  const got = await Users.findOne({ username: user.username });
  if (got != null) {
    throw new ServiceError('Username Exists', 403);
  }
  const created = await Users.create(user);
  return created;
};

export const updateUserService = async (id, user) => {
  const updated = await Users.updateOne({ _id: id }, user);
  return updated;
};

export const deleteUserService = async (id) => {
  const deleted = await Users.deleteOne({ _id: id });
  return deleted;
};
