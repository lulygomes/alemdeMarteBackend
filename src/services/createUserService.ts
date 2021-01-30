import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import User from '../models/User';

interface Response {
  user: User;
  token: string;
}

class CreateUserService {
  public async execute(name: string): Promise<Response> {
    try {
      const userRepository = getRepository(User);

      const existUser = await userRepository.findOne({ where: { name } });

      const { secret, expiresIn } = authConfig.jwt;

      if (existUser) {
        const token = sign({}, secret, {
          subject: existUser.id,
          expiresIn,
        });

        const user = existUser;

        return { user, token };
      }

      const user = userRepository.create({ name });
      await userRepository.save(user);

      const token = sign({}, secret, {
        subject: user.id,
        expiresIn,
      });

      return { user, token };
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default CreateUserService;
