const HomeModels = require("../../models/home/home");
exports.insertData = async (req, res, next) => {
  try {
    const { name } = req.body;
    let language = req.query.language;
    if (language == "en") {
      const data = new HomeModels({
        name_en: name,
        logo_en: req.files.logo[0].path,
        image_en: req.files.image[0].path,
      });
      if (!data) {
        res.status(404).json({ error: "ລອງໃໝ່ອີກຄັ້ງ" });
      }
      await data.save();
      res.status(201).json({
        message: req.t("create is succes"),
        data: data,
      });
    } else if (language == "lo") {
      const data = new HomeModels({
        name_lo: name,
        logo_lo: req.files.logo[0].path,
        image_lo: req.files.image[0].path,
      });
      if (!data) {
        res.status(404).json({ error: "ລອງໃໝ່ອີກຄັ້ງ" });
      }
      await data.save();
      res.status(201).json({
        message: req.t("create is succes"),
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
      await HomeModels.find()
        .sort({ createdAt: -1 })
        .select("name_en logo_en image_en")
        .then((docs) => {
          res.status(200).json({
            data: docs,
          });
        });
    } else if (translation == "lo") {
      await HomeModels.find()
        .sort({ createdAt: -1 })
        .select("name_lo logo_lo image_lo")
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
    const data = await HomeModels.findById(id);
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
    const data = await HomeModels.findById(id);
    if (!data) {
      res.status(404).json({ error: "ບໍ່ມີໄອດີນີ້ໃນລະບົບ" });
    } else {
      await data.deleteOne({ _id: id });
      res.status(200).json({ message: "ລົບຂໍ້ມູນສຳເລັດແລ້ວ" });
    }
  } catch (error) {}
};
