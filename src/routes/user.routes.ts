import { Router } from 'express';

import CreateUserService from '../services/createUserService';

const userRoutes = Router();

userRoutes.post('/:name', async (request, response) => {
  try {
    const createUser = new CreateUserService();
    const { name } = request.params;

    const { user, token } = await createUser.execute(name);

    return response.json({ user, token });
  } catch (err) {
    throw new Error(err);
  }
});

export default userRoutes;
