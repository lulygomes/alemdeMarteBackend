import { Router } from "express";

import GetRecentPhotoService from "../services/getRecentPhotosService";

const photoRoutes = Router();

photoRoutes.get("/", async (request, response) => {
  const getRecentPhotos = new GetRecentPhotoService();

  const photos = await getRecentPhotos.execute();

  return response.json(photos);
});

export default photoRoutes;
