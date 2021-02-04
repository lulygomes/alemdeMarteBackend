import { getRepository, getCustomRepository } from 'typeorm';

import TotalLikesRepository from '../repositories/TotalLikesRepository';
import Like from '../models/Like';
import TotalLikes from '../models/TotalLikes';

interface RequestData {
  photoId: string;
  userId: string;
}

class LikePhotoService {
  public async execute({
    photoId: photo_id,
    userId: user_id,
  }: RequestData): Promise<TotalLikes> {
    try {
      const likeRepository = getRepository(Like);
      const totalLikesRepository = getCustomRepository(TotalLikesRepository);

      const likeExist = await likeRepository.findOne({
        where: { photo_id, user_id },
      });

      if (likeExist) {
        await likeRepository.remove(likeExist);

        const totalLikes = await totalLikesRepository.removeLike(
          likeExist.photo_id,
        );

        return totalLikes;
      }

      const likePhoto = likeRepository.create({
        photo_id,
        user_id,
      });

      const updatePhotoLike = await likeRepository.save(likePhoto);
      const totalLikes = await totalLikesRepository.addLike(
        updatePhotoLike.photo_id,
      );

      return totalLikes;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default LikePhotoService;
