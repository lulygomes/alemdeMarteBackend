import { getRepository } from 'typeorm';

import Like from '../models/Like';

interface RequestData {
  photoId: string;
}

class LikePhotoService {
  public async execute({ photoId: photo_id }: RequestData): Promise<Like[]> {
    try {
      const likeRepository = getRepository(Like);

      const listLikes = await likeRepository.find({
        where: { photo_id },
      });

      return listLikes;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default LikePhotoService;
