exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function(table) {
    table.increments();
    // TODO: Change to table.enu
    table.string('tone').notNullable();
    table.string('urgency').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
