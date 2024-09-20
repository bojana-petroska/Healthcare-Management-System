import { Router } from 'express';
import userController from './userController.js';
import userMiddleware from './middlewares.js';
const router = Router();
// CRUD
router.get('/', userController.get);
router.get('/:id', userController.getById);
router.post('/', userMiddleware.userValidation, userMiddleware.userValidationHandler, userController.create);
router.put('/:id', userMiddleware.userValidation, userController.update);
router.delete('/:id', userController.remove);
export default router;
