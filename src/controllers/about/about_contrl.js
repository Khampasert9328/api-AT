const About = require("../../models/about/about");
exports.insertData = async (req, res, next) => {
  try {
    const {title_en, title_lo} = req.body
    let language = req.query.language;
    if (language == "en") {
      const data = new About({
        title_en: title_en,
        logo_en: req.files.logo_en[0].path,
      });
      if (!data) {
        res.status(404).json({ error: "ລອງໃໝ່ອີກຄັ້ງ" });
      }
      //console.log(data);
      await data.save();
      res.status(201).json({
        data: data,
      });
    } else if (language == "lo") {
      const data = new About({
        title_lo: title_lo,
        logo_lo: req.files.logo_lo[0].path,
      });
      if (!data) {
        res.status(404).json({ error: "ລອງໃໝ່ອີກຄັ້ງ" });
      }
      await data.save();
      res.status(201).json({
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getData = async (req, res) => {
  try {
    let translation = req.query.language;
    console.log(typeof translation);
    if (translation == "en") {
      await About.find()
        .sort({ createdAt: -1 })
        .select("title_en logo_en ")
        .then((docs) => {
          res.status(200).json({
            data: docs,
          });
        });
    } else if (translation == "lo") {
      await About.find()
        .sort({ createdAt: -1 })
        .select("title_lo logo_lo")
        .then((docs) => {
          res.status(200).json({
            data: docs,
          });
        });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await About.findById(id);
    if (!data) {
      res.status(404).json({ error: "ບໍ່ມີຂໍ້ມູນໄອດີນີ້" });
    }
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteDatabyId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await About.findById(id);
    if (!data) {
      res.status(404).json({ error: "ບໍ່ມີໄອດີນີ້ໃນລະບົບ" });
    } else {
      await data.deleteOne({ _id: id });
      res.status(200).json({ message: "ລົບຂໍ້ມູນສຳເລັດແລ້ວ" });
    }
  } catch (error) {
    console.log(error);
  }
};
