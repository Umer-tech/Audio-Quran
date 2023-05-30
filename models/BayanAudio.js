import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../database/conn.js";
const BayanAudio = sequelize.define(
  "bayan_audio",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

    },
    AyatFrom: {
      type: DataTypes.INTEGER,
    },
    AyatTo: {
      type: DataTypes.INTEGER,
    },
    SurahRef: {
        type: DataTypes.INTEGER,
      },
    AudioFile: {
      type: DataTypes.STRING,
    },
    ReciterRef: {
        type: DataTypes.INTEGER,
      }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "bayan_audio",
    tableName: "BayanAudio",
    timestamps: false,
  }
);
sequelize
  .sync()
  .then(() => {
    console.log(" BayanAudio table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = BayanAudio;
