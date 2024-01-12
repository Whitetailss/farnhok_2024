
exports.up = function(knex, Promise) {
    return knex.schema.createTable('admin', function(table){
        table.increments('id');
        table.string('username');
        table.string('password')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('admin');
};
