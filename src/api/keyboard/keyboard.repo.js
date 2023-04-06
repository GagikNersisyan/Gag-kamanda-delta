import { Keyboards } from './keyboard.entity.js';

export const getKeyboardsRepo = async (projection, populate) =>
  Keyboards.find({}, projection, { populate });

export const getKeyboardByIdRepo = async (id, projection, populate) =>
  Keyboards.findOne({ _id: id }, projection, { populate });

export const createKeyboardRepo = async (Keyboard) => Keyboards.create(Keyboard);

export const updateKeyboardByIdRepo = async (id, Keyboard) => Keyboards.updateOne({ _id: id }, Keyboard);

export const deleteKeyboardByIdRepo = async (id) => Keyboards.deleteOne({ _id: id });