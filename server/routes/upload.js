var express = require('Express');
var router = express.Router();
const multer = require("multer");

const imageUploadPath = 'C:/Users/hp/desktop/fucking tp/uploaded_files';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
  }
})

const imageUpload = multer({storage: storage})

router.post('/', imageUpload.array("my-image-file"),function (res,res){
    console.log('POST request received to /image-upload.');
  console.log('Axios POST body: ', req.body);
  res.send('POST request recieved on server to /image-upload.');
})


module.exports = router;
