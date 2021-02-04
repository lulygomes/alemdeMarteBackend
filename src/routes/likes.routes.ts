import { Router } from 'express';

import LikePhotoService from '../services/likePhotoService';
import ListLikeByPhotoIdService from '../services/listLikeByPhotoIdService';
import ListAllLikes from '../services/listAllLikesService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const likesRoutes = Router();

likesRoutes.use(ensureAuthenticated);

// like/ retorna todos os likes
likesRoutes.get('/', async (request, response) => {
  const listAllLikes = new ListAllLikes();

  const likes = await listAllLikes.execute();

  return response.json(likes);
});

// like/photo/:photoId Retorna like por foto
likesRoutes.get('/photo/:photoId', async (request, response) => {
  const listLikeByPhotoId = new ListLikeByPhotoIdService();
  const { photoId } = request.params;

  const like = await listLikeByPhotoId.execute({ photoId });

  return response.json(like);
});
// like/photo/:photoId adiciona ou remover like na photo
likesRoutes.post('/photo/:photoId', async (request, response) => {
  const likePhoto = new LikePhotoService();
  const { photoId } = request.params;
  const { id: userId } = request.user;

  const like = await likePhoto.execute({ photoId, userId });

  return response.json(like);
});

export default likesRoutes;
