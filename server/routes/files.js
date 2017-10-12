import express from 'express';
import knex from '../db/knex';

const router = express.Router();

router.get('/', (req, res) => {
  // const { orderId } = req.body;
  const orderId = req.query.orderId;
  knex('files')
    .where({ orderId })
    .then(files => res.json(files));
});

export default router;
