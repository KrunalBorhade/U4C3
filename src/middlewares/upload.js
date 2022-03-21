const path = require('path');
const multer  = require('multer')
const req = require("express/lib/request")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../myuploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + '-' +file.originalname)
    }
  })

  function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    if(file.mimetype=="image/jpeg" || file.mimetype=="image/png"){
        cb(null, true)
    } 
    else{
        cb(new Error('Incoreect Mime Type'))
    }
  }

  const options = {
      storage,
      fileFilter,
      limits:{
          fileSize:1024*1024*10
      }
  }

  const uploads = multer(options);

  module.exports = uploads