
import {
  createLaptopService,
  deleteLaptopByIdService,
  getLaptopByIdService,
  getLaptopsService,
  updateLaptopByIdService,
} from './laptop.service.js';

export const getLaptopsController = async (req, res) => {
  const laptops = await getLaptopsService();
  res.send(laptops);
};

export const getLaptopByIdController = async (req, res, next) => {
  try {
    const laptop = await getLaptopByIdService(req.params.id);
    res.send(laptop);
  } catch (err) {
    next(err);
  }
};

export const createLaptopController = async (req, res, next) => {
  try {
    const laptop = await createLaptopService(req.body);
    return res.send(laptop);
  } catch (err) {
    next(err);
  }
};

export const updateLaptopByIdController = async (req, res, next) => {
  try {
    const laptop = await updateLaptopByIdService(req.params.id, req.body);
    res.send(laptop);
  } catch (err) {
    next(err);
  }
};

export const deleteLaptopByIdController = async (req, res, next) => {
  try {
    const laptop = await deleteLaptopByIdService(req.params.id);
    res.send(laptop);
  } catch (err) {
    next(err);
  }
};