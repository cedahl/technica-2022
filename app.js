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
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

// Define the Cache model for the "caches" table.
const Cache = sequelize.define("caches", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  location: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  }
});

// Create the "users" table.
  User.sync({
    force: true,
  })
    .then(function () {
      // Insert twelve rows into the "users" table.
      return User.bulkCreate([
        {name: "John Smith"},
        {name: "Other User"},
        {name: "Bobinette Bails"},
        {name: "Killy Paslow"},
        {name: "Rici Sussams"},
        {name: "Gilburt Hewlings"},
        {name: "Hailee Tunnock"},
        {name: "Judith Hinchcliffe"},
        {name: "Marybeth Dubery"},
        {name: "Theodoric Varne"},
        {name: "Reginald Instone"},
        {name: "Collete Lynskey"},
      ]);
    })
    .then(function () {
      // Retrieve users.
      return User.findAll();
    })
    .then(function (users) {
      // Print out the ids and names.
      users.forEach(function (users) {
        console.log(users.id + " " + users.name);
      });
      process.exit(0);
    })
    .catch(function (err) {
      console.error("error: " + err.message);
      process.exit(1);
    });


    // Create the "caches" table.
      Cache.sync({
        force: true,
      })
        .then(function () {
          // Insert four rows into the "caches" table.
          return Cache.bulkCreate([
            {location: "Times Square, New York",
             message: "The place to be on New Years'!"},
            {location: "Huntington Library, Los Angeles",
             message: "Beautiful place... took a family trip here and it was absolutely wonderful."},
            {location: "",
             message: ""},
            {location: "",
             message: ""},
          ]);
        })
        .then(function () {
          // Retrieve caches.
          return Cache.findAll();
        })
        .then(function (caches) {
          // Print out the ids, locations, and messages.
          caches.forEach(function (caches) {
            console.log(caches.id + " " + caches.location + " " + caches.message);
          });
          process.exit(0);
        })
        .catch(function (err) {
          console.error("error: " + err.message);
          process.exit(1);
        });
