exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('orders', function(table) {
      table.increments('id');
      table.string('tone').notNullable();
      table.string('urgency').notNullable();
      // TODO: Change to table.enu
      table
        .string('status')
        .notNullable()
        .defaultTo('Accepted');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
    })
    .createTable('files', function(table) {
      table.increments('id');
      table.integer('orderId').references('orders.id');
      table.string('name').notNullable();
      table.string('size').notNullable();
      table.string('url').notNullable();
    })
    .createTable('users', function(table) {
      table.increments('id');
      table.string('username').notNullable();
      table.string('password').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('files')
    .dropTable('orders')
    .dropTable('users');
};
