
const Contact = require("../../models/contact/contact_models");
exports.insertData = async (req, res, next) => {
  try {
    const { tell_en, email_en, facebook_en, location_en, tell_lo, email_lo, facebook_lo, location_lo} = req.body;
   let language = req.query.language
   if (language=='en') {
    const data = new Contact({
      tell_en: tell_en,
      email_en: email_en,
      facebook_en: facebook_en,
      location_en: location_en,
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
   }else if(language=='lo'){
    const data = new Contact({
      tell_lo: tell_lo,
      email_lo: email_lo,
      facebook_lo: facebook_lo,
      location_lo: location_lo,
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
    let translation = req.query.language;
    console.log(translation);
      if (translation == "en") {
        await Contact.find()
          .sort({ createdAt: -1 })
          .select("tell_en email_en facebook_en location_en ")
          .then((docs) => {
            res.status(200).json({
              data: docs,
            });
          });
      } else if (translation == "lo") {
        await Contact.find()
          .sort({ createdAt: -1 })
          .select("tell_lo email_lo facebook_lo location_lo")
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
    const data = await Contact.findById(id);
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
    const data = await Contact.findById(id);
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
