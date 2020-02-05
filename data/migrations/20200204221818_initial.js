exports.up = async function(knex) {
  await knex.schema.createTable("zoos", tbl => {
    tbl.increments("id");
    tbl.string("zoo_name").notNullable();
    tbl.string("address").notNullable();
  });

  await knex.schema.createTable("species", tbl => {
    tbl.increments("id");
    tbl.string("species_name").notNullable();
  });

  await knex.schema.createTable("animals", tbl => {
    tbl.increments("id");
    tbl.string("animal_name").notNullable();
    tbl
      .integer("species_id")
      .notNullable()
      .references("id")
      .inTable("species")
      //this is a reference option that says if the row this is linking to ever gets deleted, set that value to null, would have to remove .notNullable()
      //   .onDelete("SET NULL");
      // this means delete any other rows that are referencing the row that got deleted
      .onDelete("CASCADE")
      // can also say if the species ever changes, update it in the foreign key as well
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("zoos_animals", tbl => {
    tbl
      .integer("zoo_id")
      .notNullable()
      .references("id")
      .inTable("zoos")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("animal_id")
      .notNullable()
      .references("id")
      .inTable("animals")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    // creat a primary key as a combination of columns
    tbl.primary(["zoo_id", "animal_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("zoos_animals");
  await knex.schema.dropTableIfExists("animals");
  await knex.schema.dropTableIfExists("species");
  await knex.schema.dropTableIfExists("zoos");
};
