import express from 'express';
import flightController from './flightController.js';
const router = express.Router();
router.get('/', flightController.get);
router.get('/:id', flightController.getById);
router.post('/', flightController.create);
router.delete('/:id', flightController.remove);
export default router;
