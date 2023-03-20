import { Sequelize } from "sequelize"; // const sqlite = require('sqlite');

const sequelize = new Sequelize("test-db", "user", "pass", {
  dialect: "sqlite",
  storage: "HolyQuran.db",
});
module.exports = sequelize;
