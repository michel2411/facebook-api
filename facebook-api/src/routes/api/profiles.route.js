import { Router } from 'express';
import * as ProfileController from '../../controllers/profile.controller';

const api = Router();

api.post('/', ProfileController.createOne);
api.get('/', ProfileController.findAll);
api.get('/:id', ProfileController.findOneById);
api.put('/:id', ProfileController.updateOne);
api.delete('/:id', ProfileController.deleteOne);

export default api;
