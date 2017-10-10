import express from 'express';
import knex from '../db/knex';

const router = express.Router();

router.get('/', function(req, res) {
  console.log('In getOrders');
  knex('orders').then(orders => res.json(orders));
});

router.post('/', function(req, res) {
  console.log('GET request recieved!');
  const { urgency, tone } = req.body;
  console.log(urgency, tone);
  knex('orders')
    // .returning('id')
    .insert({ urgency, tone })
    // .then(orders => res.json(orders));
    .then(() => res.status(200).json({ success: true }));
});

export default router;
