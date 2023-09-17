const { Sequelize } = require('sequelize');
const { apply_relations } = require('./model_relations.js');

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  benchmark: true,
  logging: false,
});

const modelDefiners = [
  require('./models/mail.model'),
  require('./models/user.model'),
  require('./models/post.model'),
  // Add more models here...
  // require('./models/item'),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// See model_relations.js for implementation
// This function will define how models are related between each other
apply_relations(sequelize);

sequelize
  .sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });

// We export the sequelize connection instance to be used around our app.
// When trying to access the DB from elsewhere in the app, import this
module.exports = sequelize;
