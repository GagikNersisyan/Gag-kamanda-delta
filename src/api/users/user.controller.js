import {
  createUserService, deleteUserService, getUserService, getUsersService, updateUserService,
} from './users.service.js';

export const getUsersController = async (req, res) => {
  const users = await getUsersService();
  res.send(users);
};

export const getUserController = async (req, res) => {
  const user = await getUserService(req.params.id);
  res.send(user);
};

export const createUserController = async (req, res, next) => {
  try {
    const user = await createUserService(req.body);
    return res.send(user);
  } catch (err) {
    next(err);
  }
};

export const updateUserController = async (req, res, next) => {
  try {
    const user = await updateUserService(req.params.id, req.body);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export const deleteUserController = async (req, res) => {
  const user = await deleteUserService(req.params.id);
  res.send(user);
};
