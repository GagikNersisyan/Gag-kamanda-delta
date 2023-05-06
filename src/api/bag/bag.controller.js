
import {
    createBagService,
    deleteBagIdService,
    getBagByIdService,
    getBagsService,
    updateBagIdService,
} from './bag.service.js';

export const getBagsController = async (req, res) => {
    try {
        const Bags = await getBagsService(req.params.id);
        res.send(Bags);
    } catch (err) {
        next(err)
    }
};

export const getBagByIdController = async (req, res, next) => {
    try {
        const Bag = await getBagByIdService(req.params.id);
        res.send(Bag);
    } catch (err) {
        next(err);
    }
};

export const createBagController = async (req, res, next) => {
    try {
        const Bag = await createBagService(req.body);
        return res.send(Bag);
    } catch (err) {
        next(err);
    }
};

export const updateBagByIdController = async (req, res, next) => {
    try {
        const Bag = await updateBagIdService(req.params.id, req.body);
        res.send(Bag);
    } catch (err) {
        next(err);
    }
};

export const deleteBagByIdController = async (req, res) => {
    const Bag = await deleteBagIdService(req.params.id);
    res.send(Bag);
};