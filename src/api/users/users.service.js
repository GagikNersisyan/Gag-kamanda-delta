import fs from 'fs/promises';
import { ServiceError } from '../../utils/error-handling.js';

const PATH = 'src/api/users/users.json';

export const getUsersService = async () => {
  const users = JSON.parse(await fs.readFile(PATH));
  return users;
};

export const getUserService = async (index) => {
  const users = await getUsersService();
  if (users[index] == null) {
    return { massage: 'user is not exists' };
  }
  return users[index];
};

export const createUserService = async (user) => {
  const users = await getUsersService();
  const found = users.find((u) => u.username === user.username);
  if (found != null) {
    throw new ServiceError('Username Exists', 409);
  }
  users.push(user);
  await fs.writeFile(PATH, JSON.stringify(users));
  return users;
};

export const updateUserService = async (index, user) => {
  const users = await getUsersService();

  if (users[index] == null) {
    return { massage: 'user is not exists' };
  }

  if (user.username != null) {
    const found = users.find((u) => u.username === user.username);
    if (found != null) {
      return { massage: 'Username Exists' };
    }
  }
  users[index] = { ...users[index], ...user };

  await fs.writeFile(PATH, JSON.stringify(users));
  return users;
};

export const deleteUserService = async (index) => {
  const users = await getUsersService();
  const filtered = users.filter((user, i) => i !== index);
  await fs.writeFile(PATH, JSON.stringify(filtered));
  return filtered;
};
