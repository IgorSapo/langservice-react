import express from 'express';
import knex from '../db/knex';

const router = express.Router();

router.get('/', function(req, res) {
  knex('orders')
    .where({
      tone: 'Friendly'
    })
    .then(orders => res.status(200).json({ success: orders }));
});

export default router;
