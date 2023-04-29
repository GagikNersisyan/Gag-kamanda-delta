import {
  createHddService,
  deleteHddByIdService,
  getHddByIdService,
  getHddsService,
  updateHddByIdService,
} from './hdd.service.js';

export const getHddsController = async (req, res) => {
  const laptops = await getHddsService();
  res.send(laptops);
};

export const getHddByIdController = async (req, res, next) => {
  try {
    const laptop = await getHddByIdService(req.params.id);
    res.send(laptop);
  } catch (err) {
    next(err);
  }
};

export const createHddController = async (req, res, next) => {
  try {
    const laptop = await createHddService(req.body);
    return res.send(laptop);
  } catch (err) {
    next(err);
  }
};

export const updateHddByIdController = async (req, res, next) => {
  try {
    const laptop = await updateHddByIdService(req.params.id, req.body);
    res.send(laptop);
  } catch (err) {
    next(err);
  }
};

export const deleteHddByIdController = async (req, res, next) => {
  try {
    const laptop = await deleteHddByIdService(req.params.id);
    res.send(laptop);
  } catch (err) {
    next(err);
  }
};