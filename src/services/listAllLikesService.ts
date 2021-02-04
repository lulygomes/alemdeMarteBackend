import { getRepository } from 'typeorm';

import Like from '../models/Like';

class LikePhotoService {
  public async execute(): Promise<Like[]> {
    try {
      const likeRepository = getRepository(Like);

      const listLikes = await likeRepository.find();

      return listLikes;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default LikePhotoService;
