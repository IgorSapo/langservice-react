import express from 'express';
import knex from '../db/knex';

const router = express.Router();

router.get('/', function(req, res) {
  console.log('In getOrders');
  knex('orders')
    .then(orders => {
      console.log(orders);
      return orders;
    })
    .then(orders => res.json(orders));
});

router.post('/', function(req, res) {
  console.log('GET request recieved!');
  console.log(req.body);
  const { urgency, tone, files } = req.body;
  knex('orders')
    // .returning('id')
    .insert({ urgency, tone })
    .returning('id')
    .then(idArr => {
      console.log('The order id is:');
      console.log(idArr);
      const fileInsertArr = files.map(file => ({
        orderId: idArr[0],
        name: file.fileName,
        size: file.fileSize,
        url: file.secureUrl
      }));
      console.log('fileInsertArr is:');
      console.log(fileInsertArr);
      return knex('files')
        .returning('name')
        .insert(fileInsertArr)
        .then(names => {
          console.log('Names are:');
          console.log(names);
          return names;
        });
    })
    // .then(orders => res.json(orders));
    .then(result => res.status(200).json({ success: result }));
});

export default router;
