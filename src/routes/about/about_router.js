const express = require("express");
const router = express.Router();
const aboutcontroller = require("../../controllers/about/about_contrl");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/about/");
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
router.post("/insertabout",upload.fields([{name: "logo_en"},{name: "logo_lo"}]), aboutcontroller.insertData);


/* GET */
router.get('/getabout', aboutcontroller.getData)
router.get('/getaboutid/:id', aboutcontroller.getDataById)
/* DELETE */
router.delete('/deleteabout/:id', aboutcontroller.deleteDatabyId)
router.put('/updateabout/:id',upload.fields([{name: "logo_en"},{name: "logo_lo"}]), aboutcontroller.updateAbout)



module.exports = router;