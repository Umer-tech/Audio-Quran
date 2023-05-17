import { Sequelize } from "sequelize";

const sequelize = new Sequelize("test-db", "user", "pass", {
  dialect: "sqlite",
  storage: "HolyQuran.db",
});
module.exports = sequelize;
