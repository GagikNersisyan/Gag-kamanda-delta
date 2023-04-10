import { Router } from 'express';
import multer from 'multer';
import {
  getFilesController,
  getFileByIdController,
  createFileController,
  deleteFileByIdController,
} from './file.controller.js';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = Router();

router.get('/', getFilesController);

router.get('/:id', getFileByIdController);

router.post('/', upload.single('uploaded_file'), createFileController);

router.delete('/:id', deleteFileByIdController);

export default router