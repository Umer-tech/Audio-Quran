import Surah from "../../../../models/Surahs";
import sequelize from "/database/conn.js";
export default async function handler(req, res) {
  sequelize.sync().then(() => console.log("DB is ready"));
  try {
    const surahs = await Surah.findAll();
    res.status(200).json(surahs);
  } catch {
    res.status(404).json({ error: "Not Found" });
  }
}
