import {
    createSsdService,
    deleteSsdByIdService,
    getSsdByIdService,
    getSsdsService,
    updateSsdByIdService,
  } from './ssd.service.js';
  
  export const getSsdsController = async (req, res) => {
    const Ssds = await getSsdsService();
    res.send(Ssds);
  };
  
  export const getSsdByIdController = async (req, res) => {
    const Ssd = await getSsdByIdService(req.params.id);
    res.send(Ssd);
  };
  
  export const createSsdController = async (req, res, next) => {
    try {
      const Ssd = await createSsdService(req.body);
      return res.send(Ssd);
    } catch (err) {
      next(err);
    }
  };
  
  export const updateSsdByIdController = async (req, res, next) => {
    try {
      const Ssd = await updateSsdByIdService(req.params.id, req.body);
      res.send(Ssd);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteSsdByIdController = async (req, res) => {
    const Ssd = await deleteSsdByIdService(req.params.id);
    res.send(Ssd);
  };
