import { getCustomRepository } from 'typeorm';

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
  public async execute(): Promise<ResponseData> {
    try {
      const response = await api.get('/');
      const totalLikesRepository = getCustomRepository(TotalLikesRepository);
      const totalLikes = await totalLikesRepository.allPhotoTotalLikes();
      const { photos } = response.data;

      // Filtro para Add total likes nas fotos
      const photosWithLike = photos.map((photo: ResponseData) => {
        const photoLiked = totalLikes.find(
          like => Number(like.photo_id) === photo.id,
        );

        if (photoLiked) {
          return { photo, likes: photoLiked.likes };
        }

        return { photo, likes: 0 };
      });

      return photosWithLike;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default GetRecentPhotoService;
