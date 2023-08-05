const sequelize = require("./");
async function reset() {
  console.log("Syncing database...");

  await sequelize.sync({ force: true });
  console.log("Database synced!");
}

reset();
