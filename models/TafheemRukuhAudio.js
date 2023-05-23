import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../database/conn.js";
const TafheemRukuhAudio = sequelize.define(
  "tafheem_rukuh_audio",
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
      },
    ArabicText: {
      type: DataTypes.STRING,
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "tafheem_rukuh_audio",
    tableName: "TafseerRukuAudio",
    timestamps: false,
  }
);
sequelize
  .sync()
  .then(() => {
    console.log(" TafseerRukuAudio table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = TafheemRukuhAudio;
