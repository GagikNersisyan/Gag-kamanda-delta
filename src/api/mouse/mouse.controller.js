
import {
  getMousesService,
  getMouseByIdService,
  deleteMouseIdService,
  updateMouseIdService,
  createMouseService,
} from './mouse.service.js';

export const getMousesController = async (req, res) => {
  const mouses = await getMousesService();
  res.send(mouses);
};

export const getMouseByIdController = async (req, res, next) => {
  try {
    const mouse = await getMouseByIdService(req.params.id);
    res.send(mouse);
  } catch (err) {
    next(err);
  }
};

export const createMouseController = async (req, res, next) => {
  try {
    const createMouse = await createMouseService(req.body);
    res.send(createMouse);
  } catch (err) {
    next(err);
  }
};

export const deleteMouseIdController = async (req, res, next) => {
  try {
    const deletedMouse = await deleteMouseIdService(req.params.id);
    res.send(deletedMouse);
  } catch (err) {
    next(err);
  }
};

export const updateMouseIdController = async (req, res, next) => {
  try {
    const updatedMouse = await updateMouseIdService(req.params.id);
    res.send(updatedMouse);
  } catch (err) {
    next(err);
  }
};