import BayanAudio from "../../../../models/BayanAudio.js";
import sequelize from "/database/conn.js";
export default async function handler(req, res) {
  sequelize.sync().then(() => console.log("DB is ready"));
  const id = req.query.id;
  try {
    const bayanaudios = await BayanAudio.findAll({ where: { SurahRef: id}});
    res.status(200).json(bayanaudios);
  } catch {
    res.status(404).json({ error: "Not Found" });
  }
}
