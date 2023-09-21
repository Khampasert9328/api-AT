const Customers = require("../../models/customers/customers_models");
exports.insertData = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = new Customers({
      name: name,
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
    const data = await Customers.find();

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
    const data = await Customers.findById(id);
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
    const data = await Customers.findById(id);
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

exports.updatebyid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const data = await Customers.findById(id);
    if (!data) {
      res.status(404).json({ error: "ບໍ່ມີໄອດີນີ້ໃນລະບົບ" });
    } else {
      const data = await Customers.findByIdAndUpdate(
        { _id: id },
        {
          name: name,
          logo: req.file.path,
        },
        {
          new: true,
        }
      );

      if (!data) {
        res.status(404).json({ error: "ລອງໃໝ໋ອີກຄັ້ງ" });
      } else {
        res.status(201).json({
          data: data,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
