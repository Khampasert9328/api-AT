const TeamsModels = require("../../models/teams/teams_models");
exports.insertData = async (req, res, next) => {
  try {
    const {
      name_en,
      surname_en,
      position_en,
      name_lo,
      surname_lo,
      position_lo,
    } = req.body;
    let language = req.query.language;
    if (language == "en") {
      const data = new TeamsModels({
        name_en: name_en,
        surname_en: surname_en,
        position_en: position_en,
        logo_en: req.files.logo_en[0].path,
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
      const data = new Service({
        name_lo: name_lo,
        surname_lo: surname_lo,
        position_lo: position_lo,
        logo_lo: req.files.logo_lo[0].path,
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
    const data = await TeamsModels.find();

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
    const data = await TeamsModels.findById(id);
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
    const data = await TeamsModels.findById(id);
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

exports.updateTeams = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_en, surname_en, position_en } = req.body;
    const teams = await TeamsModels.findById(id);
    if (!teams) {
      res.status(404).json({ error: "ບໍ່ມີໄອດີນີ້ໃນລະບົບ" });
    } else {
    const data=  await TeamsModels.findByIdAndUpdate(
        { _id: id },
        {
          name_en: name_en,
          surname_en: surname_en,
          position_en: position_en,
          logo_en: req.files.logo_en[0].path,
        },{
          new: true
        }
      );

     if (!data) {
      res.status(404).json({ error: "ລອງໃໝ໋ອີກຄັ້ງ" });
     }else{
      res.status(201).json({
        data:data
      })
     }
    }
  } catch (error) {
    console.log(error);
  }
};
