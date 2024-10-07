import { Router } from 'express';
import doctorsController from './doctorsController.js';
const router = Router();
router.get('/', doctorsController.getAllDoctors);
router.post('/', doctorsController.createDoctor);
export default router;
