import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../database/conn.js";
const Bookmarks = sequelize.define(
  "bookmarks",
  {
    BookmarkId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Title: {
      type: DataTypes.STRING,
    },
    SurahRef: {
      type: DataTypes.INTEGER,
    },
    AyatRef: {
        type: DataTypes.INTEGER,
    },
    RepeatCount: {
        type: DataTypes.INTEGER,
    },
    EndAyatRef: {
        type: DataTypes.INTEGER,
    },
    RType: {
        type: DataTypes.INTEGER,
    },
    ReciterId: {
        type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "bookmarks",
    tableName: "Bookmark",
    timestamps: false,
  }
);
sequelize
  .sync()
  .then(() => {
    console.log("Bookmark table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Bookmarks;
