import { getRepository } from 'typeorm';

// import Likes from '../models/Likes';

import api from '../config/api';

interface ResponseData {
  id: number;
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
  };
}

class GetRecentPhotoService {
  public async execute(): Promise<ResponseData> {
    try {
      const response = await api.get('/');
      const { photos } = response.data;

      return photos;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default GetRecentPhotoService;

// const likesRepository = getRepository(Likes);

// const photoLikedList = await likesRepository.find();

// Filtro para Add likes nas fotos
// const photosWithLike = photos.map((photo: ResponseData) => {
//   const photoLiked = photoLikedList.find(
//     (like: Likes) => Number(like.photo_id) === photo.id,
//   );

//   if (photoLiked) {
//     return { photo, like: photoLiked.likes };
//   }

//   return photo;
// });
