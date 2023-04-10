import {
    createHddService,
    deleteHddByIdService,
    getHddByIdService,
    getHddsService,
    updateHddByIdService,
  } from './hdd.service.js';
  
  export const getHddsController = async (req, res) => {
    const Hdds = await getHddsService();
    res.send(Hdds);
  };
  
  export const getHddByIdController = async (req, res) => {
    const Hdd = await getHddByIdService(req.params.id);
    res.send(Hdd);
  };
  
  export const createHddController = async (req, res, next) => {
    try {
      const Hdd = await createHddService(req.body);
      return res.send(Hdd);
    } catch (err) {
      next(err);
    }
  };
  
  export const updateHddByIdController = async (req, res, next) => {
    try {
      const Hdd = await updateHddByIdService(req.params.id, req.body);
      res.send(Hdd);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteHddByIdController = async (req, res) => {
    const Hdd = await deleteHddByIdService(req.params.id);
    res.send(Hdd);
  };