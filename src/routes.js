import { Router } from "express";
import AlumniController from "./controllers/AlumniController";
import LikeController from "./controllers/LikeController";
import DislikeController from "./controllers/DislikeController";

const routes = Router();

routes.get('/', (req, res) => {
  return res.send(`Hellow ${req.query.name}`)
});

routes.get('/alumni', AlumniController.index);
routes.post('/alumni', AlumniController.store);

routes.post('/alumni/:alumniId/likes', LikeController.store);
routes.post('/alumni/:alumniId/dislikes', DislikeController.store);

export default routes;
