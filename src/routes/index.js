import express from 'express';
const router = express.Router();

import salesRoute from './sales.route';
import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  router.use('/sales', salesRoute);
  return router;
};

export default routes;
