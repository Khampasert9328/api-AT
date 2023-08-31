const About = require("../../models/about/about");
exports.insertData = async (req, res, next) => {
  try {
    const { title } = req.body;
    const data = new About({
      title: title,
      logo: req.file.path,
    });
    if (!data) {
      res.status(404).json({ error: "ລອງໃໝ່ອີກຄັ້ງ" });
    }
    await data.save();
    res.status(201).json({
      message: "ບັນທືກຂໍ້ມູນສຳເລັດ",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getData = async (req, res) => {
  try {
    const data = await About.find();

    if (!data) {
      res.status(404).json({ error: "ບໍ່ມີຂໍ້ມູນ" });
    }
    res.status(200).json({
      data: data,
    });
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
