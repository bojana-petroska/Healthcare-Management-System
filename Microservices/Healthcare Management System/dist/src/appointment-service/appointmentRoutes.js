import { Router } from 'express';
import appointmentsController from './appointmentController.js';
const router = Router();
router.get('/', appointmentsController.getAllAppointments);
router.post('/', appointmentsController.createAppointment);
export default router;
