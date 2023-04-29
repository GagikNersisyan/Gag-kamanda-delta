import {
  createCaseService,
  deleteCaseByIdService,
  getCaseByIdService,
  getCasesService,
  updateCaseByIdService,
} from './case.service.js';

export const getCasesController = async (req, res) => {
  const Cases = await getCasesService();
  res.send(Cases);
};

export const getCaseByIdController = async (req, res, next) => {
  try {
    const Case = await getCaseByIdService(req.params.id);
    res.send(Case);
  } catch (err) {
    next(err);
  }
};

export const createCaseController = async (req, res, next) => {
  try {
    const Case = await createCaseService(req.body);
    return res.send(Case);
  } catch (err) {
    next(err);
  }
};

export const updateCaseByIdController = async (req, res, next) => {
  try {
    const Case = await updateCaseByIdService(req.params.id, req.body);
    res.send(Case);
  } catch (err) {
    next(err);
  }
};

export const deleteCaseByIdController = async (req, res, next) => {
  try {
    const Case = await deleteCaseByIdService(req.params.id);
    res.send(Case);
  } catch (err) {
    next(err);
  }
};
  
