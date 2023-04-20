import { Keyboards } from './keyboard.entity.js';

export const getKeyboardsRepo = async (projection, populate) =>
  Keyboards.find({}, projection, { populate });

export const getKeyboardByIdRepo = async (id, projection, populate) =>
  Keyboards.findOne({ _id: id }, projection, { populate });

export const createKeyboardRepo = async (keyboard) => Keyboards.create(keyboard);

export const updateKeyboardByIdRepo = async (id, keyboard) => Keyboards.updateOne({ _id: id }, keyboard);

export const deleteKeyboardByIdRepo = async (id) => Keyboards.deleteOne({ _id: id });