
import {
  createPcService,
  deletePcIdService,
  getPcByIdService,
  getPcsService,
  updatePcIdService,
} from './pc.service.js';

export const getPcsController = async (req, res) => {
  const Pcs = await getPcsService();
  res.send(Pcs);
};

export const getPcByIdController = async (req, res, next) => {
  try {
    const Pc = await getPcByIdService(req.paPcs.id);
    res.send(Pc);
  } catch (err) {
    next(err);
  }
};

export const createPcController = async (req, res, next) => {
  try {
    const Pc = await createPcService(req.body);
    return res.send(Pc);
  } catch (err) {
    next(err);
  }
};

export const updatePcByIdController = async (req, res, next) => {
  try {
    const Pc = await updatePcIdService(req.paPcs.id, req.body);
    res.send(Pc);
  } catch (err) {
    next(err);
  }
};

export const deletePcByIdController = async (req, res) => {
  const Pc = await deletePcIdService(req.paPcs.id);
  res.send(Pc);
};