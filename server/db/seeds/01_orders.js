exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('orders').insert([
        { id: 1, tone: 'Friendly', urgency: 'I got time' },
        { id: 2, tone: 'Corporate', urgency: 'Average' },
        { id: 3, tone: 'Media', urgency: 'Yesterday' }
      ]);
    });
};
