
/* eslint-disable import/no-unresolved */
import {
  deleteUserByIdService,
  getUserByIdOrFailService,
  getUsersService,
  updateUserByIdService,
  createUserService,
  changePasswordService
} from './user.service.js';

export const getUsersController = async (req, res) => {
  const users = await getUsersService();
  res.send(users);
};

export const getUserByIdController = async (req, res, next) => {
  try {
    const user = await getUserByIdOrFailService(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export const updateUserByIdController = async (req, res, next) => {
  try {
    const user = await updateUserByIdService(req.params.id, { ...req.body, role: 'ADMIN' });
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export const deleteUserByIdController = async (req, res, next) => {
  try {
    const user = await deleteUserByIdService(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export const createUserController = async (req, res, next) => {
  try {
    const created = await createUserService({ ...req.body, role: 'ADMIN' });
    res.send(created);
  } catch (err) {
    next(err);
  }
};

export const changePasswordController = async (req, res, next) => {
  try {
    const changed = await changePasswordService(req.params.id);
    res.send(changed)
  } catch (err) {
    next(err);
  }
};