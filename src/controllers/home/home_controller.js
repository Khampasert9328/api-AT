const HomeModels = require("../../models/home/home");
exports.insertData = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(req.files)
    const data = new HomeModels({
      name: name,
      logo: req.files.logo[0].path,
      image: req.files.image[0].path,
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
    const data = await HomeModels.find();

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
        }else{
            await data.deleteOne({ _id: id });
            res.status(200).json({ message: "ລົບຂໍ້ມູນສຳເລັດແລ້ວ" });
        }

    } catch (error) {
        
    }
}
