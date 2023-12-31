const express = require("express");
const router = express.Router();
const servicecontroller = require("../../controllers/service/service_contrl");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/service");
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
router.post("/insertsevice",upload.fields([{name: "logo_en"},{name: "logo_lo"}]), servicecontroller.insertData);


/* GET */
router.get('/getsevice', servicecontroller.getData)
router.get('/getsevicebyid/:id', servicecontroller.getDataById)
/* DELETE */
router.delete('/deletesevice/:id', servicecontroller.deleteDatabyId)
router.put('/updatesevice/:id',upload.fields([{name: "logo_en"},{name: "logo_lo"}]), servicecontroller.updateService)


module.exports = router;
