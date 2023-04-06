import {
    createKeyboardService,
    deleteKeyboardByIdService,
    getKeyboardByIdService,
    getKeyboardsService,
    updateKeyboardByIdService,
  } from './keyboard.service.js';
  
  export const getKeyboardsController = async (req, res) => {
    const Keyboards = await getKeyboardsService();
    res.send(Keyboards);
  };
  
  export const getKeyboardByIdController = async (req, res) => {
    const Keyboard = await getKeyboardByIdService(req.params.id);
    res.send(Keyboard);
  };
  
  export const createKeyboardController = async (req, res, next) => {
    try {
      const Keyboard = await createKeyboardService(req.body);
      return res.send(Keyboard);
    } catch (err) {
      next(err);
    }
  };
  
  export const updateKeyboardByIdController = async (req, res, next) => {
    try {
      const Keyboard = await updateKeyboardByIdService(req.params.id, req.body);
      res.send(Keyboard);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteKeyboardByIdController = async (req, res) => {
    const Keyboard = await deleteKeyboardByIdService(req.params.id);
    res.send(Keyboard);
  };