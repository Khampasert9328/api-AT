const express = require("express");
const router = express.Router();
const teamscontroller = require("../../controllers/teams/teams_contrl");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/teams");
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
router.post("/insertteams",upload.fields([{name: "logo_en"},{name: "logo_lo"}]), teamscontroller.insertData);


/* GET */
router.get('/getteams', teamscontroller.getData)
router.get('/getteamsbyid/:id', teamscontroller.getDataById)
/* DELETE */
router.delete('/deleteteams/:id', teamscontroller.deleteDatabyId)


module.exports = router;
