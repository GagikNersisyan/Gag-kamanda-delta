/* eslint-disable import/no-unresolved */
import {
  deleteUserByIdService,
  getUserByIdService,
  getUsersService,
  updateUserByIdService,
  createAdminService
} from './user.service.js';

export const getUsersController = async (req, res) => {
  const users = await getUsersService();
  res.send(users);
};

export const getUserByIdController = async (req, res, next) => {
  try {
    const user = await getUserByIdService(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export const updateUserByIdController = async (req, res, next) => {
  try {
    const user = await updateUserByIdService(req.params.id, req.body);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export const changePasswordUserByIdController = async (req, res, next) => {
  try {
    const user = await changePasswordUserByIdService(req.body, req.user);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export const deleteUserByIdController = async (req, res) => {
  const user = await deleteUserByIdService(req.params.id);
  res.send(user);
};

export const createAdminController = async (req, res, next) => {
  try {
    const createAdmin = await createAdminService(req.body);
    res.send(createAdmin);
  } catch (err) {
    next(err);
  }
};