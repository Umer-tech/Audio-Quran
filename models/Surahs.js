import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../database/conn.js";
const Surahs = sequelize.define(
  "surahs",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    EnglishName: {
      type: DataTypes.STRING,
    },
    ArabicName: {
      type: DataTypes.STRING,
    },
    Meaning: {
      type: DataTypes.STRING,
    },
    NumberofAyats: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "surahs",
    tableName: "Surah",
    timestamps: false,
  }
);
sequelize
  .sync()
  .then(() => {
    console.log("Surah table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Surahs;
