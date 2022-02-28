import { Router } from 'express';
import * as UserController from '../../controllers/user.controller';

const api = Router();

api.delete('/:id', UserController.deleteOne);

export default api;