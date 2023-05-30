import Bookmark from "../../../../models/Bookmark";
import sequelize from "/database/conn.js";
export default async function handler(req, res) {
  sequelize.sync().then(() => console.log("DB is ready"));
  
  if(req.method == "GET")
  {
    try {
      const bookmarks = await Bookmark.findAll();
      res.status(200).json(bookmarks);
    } catch {
      res.status(404).json({ error: "Not Found" });
    }
  }

  else if(req.method  == "POST")
  {
    try {
        const formData = req.body;

        const {Title, SurahRef, AyatRef, RepeatCount, EndAyatRef, RType, ReciterId} = formData;


        if(!formData) return res.status(404).json( { error: "Form Data Not Provided...!"});
        const bookmark = await Bookmark.create({ Title : Title, SurahRef: SurahRef, AyatRef : AyatRef,
             RepeatCount : RepeatCount, EndAyatRef: EndAyatRef, RType: RType, ReciterId: ReciterId });
        return res.status(200).json(bookmark)
        }
     catch (error) {
        return res.status(404).json({ error })
    }
  }
}
