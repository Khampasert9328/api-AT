const express = require("express");
const router = express.Router();
const contactcontroller = require("../../controllers/contact/contact_contrl");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/contact");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString()+file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype=="image/jpeg" || file.mimetype=="image/png") {
        cb(null,true)
        
    }else{
        cb(null,false)
    }
}
const upload = multer({
  storage: storage,
  limits: { fieldNameSize: 1024 * 1024 * 5 },fileFilter:fileFilter
});
/* POST */
router.post("/insertcontact",upload.fields([{name: "logo_en"},{name: "logo_lo"}]), contactcontroller.insertData);


/* GET */
router.get('/getcontact', contactcontroller.getData)
router.get('/getcontactbyid/:id', contactcontroller.getDataById)
/* DELETE */
router.delete('/deletecontact/:id', contactcontroller.deleteDatabyId)


module.exports = router;
