import { Router } from "express";

import photosRoutes from "./photos.routes";

const routes = Router();

routes.use("/photos", photosRoutes);

export default routes;
