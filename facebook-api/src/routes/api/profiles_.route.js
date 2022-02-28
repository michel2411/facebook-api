import { Router } from 'express';
import * as ProfileController from '../../controllers/profile.controller';

const api = Router();

api.get('/:id/profile', ProfileController.findOneById);
api.put('/:id/profile', ProfileController.updateOne);


export default api;
