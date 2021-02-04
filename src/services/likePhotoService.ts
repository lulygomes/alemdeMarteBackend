import { getRepository, getCustomRepository } from 'typeorm';

import TotalLikesRepository from '../repositories/TotalLikesRepository';
import Like from '../models/Like';

interface ResponseData {
  message: string;
}

interface RequestData {
  photoId: string;
  userId: string;
}

class LikePhotoService {
  public async execute({
    photoId: photo_id,
    userId: user_id,
  }: RequestData): Promise<Like | ResponseData> {
    try {
      const likeRepository = getRepository(Like);
      const totalLikesRepository = getCustomRepository(TotalLikesRepository);

      const likeExist = await likeRepository.findOne({
        where: { photo_id, user_id },
      });

      if (likeExist) {
        await likeRepository.remove(likeExist);

        await totalLikesRepository.removeLike(likeExist.photo_id);

        return { message: 'like removed' };
      }

      const likePhoto = likeRepository.create({
        photo_id,
        user_id,
      });

      const updatePhotoLike = await likeRepository.save(likePhoto);
      await totalLikesRepository.addLike(updatePhotoLike.photo_id);

      return updatePhotoLike;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default LikePhotoService;
