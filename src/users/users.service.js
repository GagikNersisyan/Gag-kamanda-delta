import fs from 'fs/promises';

const PATH = 'src/users/users.json';

export const getUsers = async () => {
  const users = JSON.parse(await fs.readFile(PATH));
  return users;
};

export const getUser = async (index) => {
  const users = await getUsers();
  if (users[index] == null) {
    return { massage: 'user is not exists' };
  }
  return users[index];
};

export const createUser = async (user) => {
  const users = await getUsers();
  const found = users.find((u) => u.username === user.username);
  if (found != null) {
    return { massage: 'Username Exists' };
  }
  users.push(user);
  await fs.writeFile(PATH, JSON.stringify(users));
  return users;
};

export const updateUser = async (index, user) => {
  const users = await getUsers();

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

export const deleteUser = async (index) => {
  const users = await getUsers();
  const filtered = users.filter((user, i) => i !== index);
  await fs.writeFile(PATH, JSON.stringify(filtered));
  return filtered;
};
