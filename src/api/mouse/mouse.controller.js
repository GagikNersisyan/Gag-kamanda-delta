import {
  createMouseService,
  deleteMouseByIdService,
  getMouseByIdService,
  getMousesService,
  updateMouseByIdService,
} from './mouse.service.js';

export const getMousesController = async (req, res) => {
  const Mouses = await getMousesService();
  res.send(Mouses);
};

export const getMouseByIdController = async (req, res) => {
  const Mouse = await getMouseByIdService(req.params.id);
  res.send(Mouse);
};

export const createMouseController = async (req, res, next) => {
  try {
    const Mouse = await createMouseService(req.body);
    return res.send(Mouse);
  } catch (err) {
    next(err);
  }
};

export const updateMouseByIdController = async (req, res, next) => {
  try {
    const Mouse = await updateMouseByIdService(req.params.id, req.body);
    res.send(Mouse);
  } catch (err) {
    next(err);
  }
};

export const deleteMouseByIdController = async (req, res) => {
  const Mouse = await deleteMouseByIdService(req.params.id);
  res.send(Mouse);
};