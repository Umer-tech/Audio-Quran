import Bookmark from "../../../../models/Bookmark";
import sequelize from "/database/conn.js";

export default async function handler(req, res) {
  sequelize.sync().then(() => console.log("DB is ready"));
  const id = req.query.id;
  if(req.method == "GET")
  {
  try {
    const bookmark = await Bookmark.findAll({ where: { BookmarkId : id }});
    res.status(200).json(bookmark);
  } catch {
    res.status(404).json({ error: "Not Found" });
  }

  }
  if(req.method == "DELETE")
  {
    try {
      const result = await Bookmark.destroy({
        where: {
          BookmarkId: id
        }
      });
      if(!result)
        throw "Not Found";
      res.status(200).json("Deleted!!!");
    } catch {
      res.status(404).json({ error: "Not Found" });
    }
  }

  else if(req.method  == "PUT")
  {
    try {
        const formData = req.body;
        const {Title, SurahRef, AyatRef, RepeatCount, EndAyatRef, RType, ReciterId} = formData;
        if(!formData) return res.status(404).json( { error: "Form Data Not Provided...!"});
        const result = await Bookmark.update({ Title : Title, SurahRef: SurahRef, AyatRef : AyatRef,
             RepeatCount : RepeatCount, EndAyatRef: EndAyatRef, RType: RType, ReciterId: ReciterId },{
                where: {
                    BookmarkId: id
                  }
             }
             );
             if(!result[0])
                throw "Not Found";
        return res.status(200).json("Updated!!!")
        }
     catch (error) {
        return res.status(404).json({ error })
    }
  }
//   sequelize.close();
}
