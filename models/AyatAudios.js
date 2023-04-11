import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../database/conn.js";
const AyatAudios = sequelize.define(
  "ayataudios",
  {
    AyatId: {
      type: DataTypes.INTEGER,
      primaryKey: true,

    },
    SurahRef: {
      type: DataTypes.INTEGER,
    },
    ReciterRef: {
      type: DataTypes.INTEGER,
    },
    Duration: {
      type: DataTypes.STRING,
    },
    AudioFile: {
      type: DataTypes.STRING,
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "ayataudios",
    tableName: "AyatAudio",
    timestamps: false,
  }
);
sequelize
  .sync()
  .then(() => {
    console.log("Ayat table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = AyatAudios;
