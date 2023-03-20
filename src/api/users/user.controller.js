import {
  createUserService, deleteUserService, getUserService, getUsersService, updateUserService,
} from './users.service.js';

export const getUsersController = async (req, res) => {
  const users = await getUsersService();
  res.send(users);
};

export const getUserController = async (req, res) => {
  const index = Number(req.params.index);
  const user = await getUserService(index);
  res.send(user);
};

export const createUserController = async (req, res, next) => {
  try {
    const user = await createUserService(req.body);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export const updateUserController = async (req, res) => {
  const index = Number(req.params.index);
  const user = await updateUserService(index, req.body);
  res.send(user);
};

export const deleteUserController = async (req, res) => {
  const index = Number(req.params.index);
  const user = await deleteUserService(index);
  res.send(user);
};
