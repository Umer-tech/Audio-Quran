import AyatAudios from "../../../../models/AyatAudios";
import sequelize from "/database/conn.js";
export default async function handler(req, res) {
  sequelize.sync().then(() => console.log("DB is ready"));
  const slug = req.query.id;
  const arr = slug.split("-")
  const surahid = arr[0];
  const reciterid = arr[1];
  try {
    const ayataudios = await AyatAudios.findAll({ where: { SurahRef: surahid, ReciterRef: reciterid }});
    res.status(200).json(ayataudios);
  } catch {
    res.status(404).json({ error: "Not Found" });
  }
}
