const express = require("express");
const router = express.Router();
const homecontroller = require("../../controllers/home/home_controller");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/home");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
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
router.post("/inserthome",upload.fields([{name: "logo"},{name: "image"}]), homecontroller.insertData);


/* GET */
router.get('/gethome', homecontroller.getData)
router.get('/gethomebyid/:id', homecontroller.getDataById)
/* DELETE */
router.delete('/deletehome/:id', homecontroller.deleteDatabyId)
router.put('/updatehome/:id',upload.fields([{name: "logo"},{name: "image"}]), homecontroller.updateHome)


module.exports = router;
