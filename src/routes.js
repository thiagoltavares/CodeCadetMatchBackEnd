import { Router } from "express";
import AlumniController from "./controllers/AlumniController";

const routes = Router();

routes.get('/', (req, res) => {
  return res.send(`Hellow ${req.query.name}`)
});

routes.post('/alumni', AlumniController.store)

export default routes;
