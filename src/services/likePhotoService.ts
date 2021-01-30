import { getRepository } from 'typeorm';

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

      const likeExist = await likeRepository.findOne({
        where: { photo_id, user_id },
      });

      if (likeExist) {
        await likeRepository.remove(likeExist);

        return { message: 'like removed' };
      }

      const likePhoto = likeRepository.create({
        photo_id,
        user_id,
      });

      const updatePhotoLike = await likeRepository.save(likePhoto);

      return updatePhotoLike;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default LikePhotoService;
