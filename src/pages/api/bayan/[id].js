import sequelize from "/database/conn.js";
const { QueryTypes } = require('sequelize');


export default async function handler(req, res) {
  sequelize.sync().then(() => console.log("DB is ready"));
  const id = req.query.id;
  let bayan_audio
  try {
    sequelize.query(
        `Select BayanAudio.Id, BayanAudio.AyatFrom, BayanAudio.AyatTo, BayanAudio.SurahRef, BayanAudio.AudioFile, BayanAudio.ReciterRef, Quran.AyahText FROM BayanAudio INNER JOIN Quran ON BayanAudio.AyatFrom = Quran.VerseID AND BayanAudio.SurahRef = Quran.SuraID WHERE BayanAudio.SurahRef= ${id}`,
        {
          type: QueryTypes.SELECT,
        }
      ).then(results => {
        res.status(200).json(results);
        }).catch(err => {
        console.error(err);
      });
  } catch {
    res.status(404).json({ error: "Not Found" });
  }
}
