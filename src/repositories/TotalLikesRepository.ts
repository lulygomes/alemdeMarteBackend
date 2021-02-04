import { EntityRepository, Repository } from 'typeorm';

import TotalLikes from '../models/TotalLikes';

@EntityRepository(TotalLikes)
class TotalLikesRepository extends Repository<TotalLikes> {
  public async addLike(photo_id: string): Promise<TotalLikes> {
    const totalPhotoExist = await this.findOne({
      where: { photo_id },
    });

    if (totalPhotoExist) {
      const totalPhotoUpdated = {
        ...totalPhotoExist,
        likes: (totalPhotoExist.likes += 1),
      };

      const response = await this.save(totalPhotoUpdated);

      return response;
    }

    const photoLiked = this.create({ photo_id, likes: 1 });

    const response = await this.save(photoLiked);

    return response;
  }

  public async removeLike(photo_id: string): Promise<TotalLikes> {
    const totalPhotoExist = await this.findOne({
      where: { photo_id },
    });

    if (totalPhotoExist && totalPhotoExist.likes >= 1) {
      const totalPhotoUpdated = {
        ...totalPhotoExist,
        likes: (totalPhotoExist.likes -= 1),
      };

      const response = await this.save(totalPhotoUpdated);

      return response;
    }
    const photoUnlike = this.create({ photo_id, likes: 0 });

    const response = await this.save(photoUnlike);

    return response;
  }

  public async allPhotoTotalLikes(): Promise<TotalLikes[]> {
    const totalPhotoLikes = await this.find();

    return totalPhotoLikes;
  }
}

export default TotalLikesRepository;
