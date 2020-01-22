import express from 'express';
import { home, home2, userCreate } from './controller/main.controller';

const router = express.Router();

router
  .route('/')
  .get(home);
router
  .route('/user')
  .post(userCreate)


export default router;
