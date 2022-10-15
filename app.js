const Sequelize = require("sequelize-cockroachdb");

// Connect to CockroachDB through Sequelize.
const connectionString = process.env.DATABASE_URL
const sequelize = new Sequelize(connectionString, {
  dialectOptions: {
    application_name: "docs_simplecrud_node-sequelize"
  }
});

// Define the User model for the "users" table.
const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

// Create the "users" table.
  User.sync({
    force: true,
  })
    .then(function () {
      // Insert two rows into the "users" table.
      return User.bulkCreate([
        {
          id: 1,
          name: "John Smith",
        },
        {
          id: 2,
          name: "Other User",
        },
      ]);
    })
    .then(function () {
      // Retrieve accounts.
      return User.findAll();
    })
    .then(function (users) {
      // Print out the balances.
      users.forEach(function (users) {
        console.log(users.id + " " + users.name);
      });
      process.exit(0);
    })
    .catch(function (err) {
      console.error("error: " + err.message);
      process.exit(1);
    });
