import { Router } from 'express';

import photosRoutes from './photos.routes';
import likesRoutes from './likes.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use('/photos', photosRoutes);
routes.use('/like', likesRoutes);
routes.use('/user', userRoutes);

export default routes;
