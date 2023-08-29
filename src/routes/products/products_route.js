const express = require("express");
const router = express.Router();
const productscontroller = require("../../controllers/produts/products_contrl");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/products");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
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
router.post("/insertproducts",upload.single('logo'), productscontroller.insertData);


/* GET */
router.get('/getproducts', productscontroller.getData)
router.get('/getproductsbyid/:id', productscontroller.getDataById)
/* DELETE */
router.delete('/deleteproducts/:id', productscontroller.deleteDatabyId)


module.exports = router;