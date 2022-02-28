import { Router } from 'express';
import * as PostController from '../../controllers/post.controller';

const api = Router();

api.get('/:id/posts', PostController.findOneById);

export default api;
