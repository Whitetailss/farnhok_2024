/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table('school_details', function(table) {
    table.string('half_day_tuition');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table('school_details', function(table) {
    table.dropColumns('half_day_tuition');
  })
};
