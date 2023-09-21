const express = require("express");
const router = express.Router();
const customerscontroller = require("../../controllers/customers/customers_contrl");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/customers");
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
router.post("/insertcustomers",upload.single('logo'), customerscontroller.insertData);


/* GET */
router.get('/getcustomers', customerscontroller.getData)
router.get('/getcustomersbyid/:id', customerscontroller.getDataById)
/* DELETE */
router.delete('/deletecustomers/:id', customerscontroller.deleteDatabyId)
router.put('/updatecustomer/:id',upload.single('logo'), customerscontroller.updatebyid)


module.exports = router;
