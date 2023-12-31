const Products = require("../../models/products/products_models");
exports.insertData = async (req, res, next) => {
  try {
    const { name_en, title_en, name_lo, title_lo } = req.body;
    let language = req.query.language;
    if (language == "en") {
      const data = new Products({
        name_en: name_en,
        logo_en: req.files.logo_en[0].path,
        title_en: title_en,
      });
      if (!data) {
        res.status(404).json({ error: "ລອງໃໝ່ອີກຄັ້ງ" });
      }
      await data.save();
      res.status(201).json({
        message: "ບັນທືກຂໍ້ມູນສຳເລັດ",
        data: data,
      });
    } else if (language == "lo") {
      const data = new Products({
        name_lo: name_lo,
        logo_lo: req.files.logo_lo[0].path,
        title_lo: title_lo,
      });
      if (!data) {
        res.status(404).json({ error: "ລອງໃໝ່ອີກຄັ້ງ" });
      }
      await data.save();
      res.status(201).json({
        message: "ບັນທືກຂໍ້ມູນສຳເລັດ",
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
    console.log(translation);
    if (translation == "en") {
      await Products.find()
        .sort({ createdAt: -1 })
        .select("name_en title_en logo_en ")
        .then((docs) => {
          res.status(200).json({
            data: docs,
          });
        });
    } else if (translation == "lo") {
      await Products.find()
        .sort({ createdAt: -1 })
        .select("name_lo title_lo logo_lo")
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
    const data = await Products.findById(id);
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
    const data = await Products.findById(id);
    if (!data) {
      res.status(404).json({ error: "ບໍ່ມີໄອດີນີ້ໃນລະບົບ" });
    } else {
      await data.deleteOne({ _id: id });
      res.status(200).json({ message: "ລົບຂໍ້ມູນສຳເລັດແລ້ວ" });
    }
  } catch (error) {}
};

exports.updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_en, title_en } = req.body;
    const product = await Products.findById(id);
    if (!product) {
      res.status(404).json({ error: "ບໍ່ມີໄອດີນີ້ໃນລະບົບ" });
    } else {
      const data = await Products.findByIdAndUpdate(
        { _id: id },
        {
          name_en: name_en,
          title_en: title_en,
          logo_en: req.files.logo_en[0].path,
        },
        {
          new: true,
        }
      );

      if (!data) {
        res.status(404).json({ error: "ບໍ່ສາມາດອັບເດດໄດ້" });
      }
    
      res.status(200).json({
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
