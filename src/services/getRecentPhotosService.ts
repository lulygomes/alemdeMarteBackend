import { getRepository, getCustomRepository } from 'typeorm';

import Likes from '../models/Like';
import TotalLikesRepository from '../repositories/TotalLikesRepository';

import api from '../config/api';

interface ResponseData {
  id: number;
  img_src: string;
  earth_date: string;
  likes: string;
  rover: {
    id: number;
    name: string;
  };
}

class GetRecentPhotoService {
  public async execute(user_id: string): Promise<ResponseData> {
    try {
      const response = await api.get('/');

      const totalLikesRepository = getCustomRepository(TotalLikesRepository);
      const totalLikes = await totalLikesRepository.allPhotoTotalLikes();

      const likes = getRepository(Likes);
      const userLikes = await likes.find({ where: { user_id } });

      const { photos } = response.data;

      // Filtro para Add total likes nas fotos e se user tem like na foto
      const photosWithLikes = photos.map((photo: ResponseData) => {
        const photoLikes = totalLikes.find(
          like => Number(like.photo_id) === photo.id,
        );

        const userLikedPhoto = userLikes.find(
          userLike => Number(userLike.photo_id) === photo.id,
        );

        if (photoLikes) {
          return { ...photo, likes: photoLikes.likes, like: !!userLikedPhoto };
        }

        return { ...photo, likes: 0, like: !!userLikedPhoto };
      });

      return photosWithLikes;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default GetRecentPhotoService;
