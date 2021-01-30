import { Router } from 'express';

import GetRecentPhotoService from '../services/getRecentPhotosService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const photoRoutes = Router();

photoRoutes.use(ensureAuthenticated);

photoRoutes.get('/', async (request, response) => {
  try {
    const getRecentPhotos = new GetRecentPhotoService();

    const photos = await getRecentPhotos.execute();

    return response.json(photos);
  } catch (err) {
    throw new Error(err);
  }
});

export default photoRoutes;
