import {
  getKeyboardsService,
  getKeyboardByIdService,
  createKeyboardService,
  updateKeyboardByIdService,
  deleteKeyboardByIdService,
} from './keyboard.service.js';

export const getKeyboardsController = async (req, res) => {
  const keyboards = await getKeyboardsService();
  res.send(keyboards);
};

export const getKeyboardByIdController = async (req, res, next) => {
  try {
    const keyboard = await getKeyboardByIdService(req.params.id);
    res.send(keyboard);
  } catch (err) {
    next(err);
  }
};

export const createKeyboardController = async (req, res, next) => {
  try {
    const keyboard = await createKeyboardService(req.body);
    return res.send(keyboard);
  } catch (err) {
    next(err);
  }
};

export const updateKeyboardByIdController = async (req, res, next) => {
  try {
    const keyboard = await updateKeyboardByIdService(req.params.id, req.body);
    res.send(keyboard);
  } catch (err) {
    next(err);
  }
};

export const deleteKeyboardByIdController = async (req, res, next) => {
  try {
    const keyboard = await deleteKeyboardByIdService(req.params.id);
    res.send(keyboard);
  } catch (err) {
    next(err);
  }
};