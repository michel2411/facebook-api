import { Router } from 'express';
/** Routes */
import authenticationsRoutes from './authentication.route';
import profilesRoutes from './profiles.route';
import profiles_Routes from './profiles_.route';
import postsRoutes from './posts.route';
import posts_Routes from './posts_.route';
import userRoutes from './user.route'
/** Middlewares */
import jwt from '../../middlewares/jwt.middleware';

const api = Router();

api.use('/authentication', authenticationsRoutes);
api.use('/users/profile', jwt, profilesRoutes);
api.use('/posts', jwt, postsRoutes);
api.use('/users', jwt, posts_Routes);
api.use('/users', jwt, profiles_Routes);
api.use('/users', jwt, userRoutes);


export default api;
