import { Router } from 'express';

import LikePhotoService from '../services/likePhotoService';
import ListLikeByPhotoIdService from '../services/listLikeByPhotoIdService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const likesRoutes = Router();

likesRoutes.use(ensureAuthenticated);

likesRoutes.get('/:photoId', async (request, response) => {
  const listLikeByPhotoId = new ListLikeByPhotoIdService();
  const { photoId } = request.params;

  const like = await listLikeByPhotoId.execute({ photoId });

  return response.json(like);
});

likesRoutes.post('/:photoId', async (request, response) => {
  const likePhoto = new LikePhotoService();
  const { photoId } = request.params;
  const { id: userId } = request.user;

  const like = await likePhoto.execute({ photoId, userId });

  return response.json(like);
});

export default likesRoutes;
