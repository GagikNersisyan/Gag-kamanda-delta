import {
    createRamService,
    deleteRamByIdService,
    getRamByIdService,
    getRamsService,
    updateRamByIdService,
  } from './ram.service.js';
  
  export const getRamsController = async (req, res) => {
    const Rams = await getRamsService();
    res.send(Rams);
  };
  
  export const getRamByIdController = async (req, res) => {
    const Ram = await getRamByIdService(req.params.id);
    res.send(Ram);
  };
  
  export const createRamController = async (req, res, next) => {
    try {
      const Ram = await createRamService(req.body);
      return res.send(Ram);
    } catch (err) {
      next(err);
    }
  };
  
  export const updateRamByIdController = async (req, res, next) => {
    try {
      const Ram = await updateRamByIdService(req.params.id, req.body);
      res.send(Ram);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteRamByIdController = async (req, res) => {
    const Ram = await deleteRamByIdService(req.params.id);
    res.send(Ram);
  };