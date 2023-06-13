
import { Cases } from './case.entity.js';

export const getCasesRepo = async (projection, populate) =>
  Cases.find({}, projection, { populate });

export const getCaseByIdRepo = async (id, projection, populate) =>
  Cases.findOne({ _id: id }, projection, { populate });

export const createCaseRepo = async (Case) => Cases.create(Case);

export const updateCaseByIdRepo = async (id, Case) => Cases.updateOne({ _id: id }, Case);

export const deleteCaseByIdRepo = async (id) => Cases.softDelete({ _id: id });