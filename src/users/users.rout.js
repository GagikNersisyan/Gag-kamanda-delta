import { Router } from 'express';
import {
  getUsers, createUser, getUser, updateUser, deleteUser,
} from './users.service.js';

const router = Router();

router.get('/', async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

router.get('/:index', async (req, res) => {
  const index = Number(req.params.index);
  const user = await getUser(index);
  res.send(user);
});

router.post('/', async (req, res) => {
  const user = await createUser(req.body);
  res.send(user);
});

router.put('/:index', async (req, res) => {
  const index = Number(req.params.index);
  const user = await updateUser(index, req.body);
  res.send(user);
});

router.delete('/:index', async (req, res) => {
  const index = Number(req.params.index);
  const user = await deleteUser(index);
  res.send(user);
});

export default router;
