const multer = require('multer')

function cerateUploader(folder){
    const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'+folder)
  },
  filename: function (req, file, cb) {
   
    cb(null, Date.now()+file.originalname)
  }
})

return multer({ storage: storage })

}
module.exports={
    maincategoryUploader: cerateUploader("maincategory"),
   subcategoryUploader: cerateUploader("subcategory"),
   brandUploader: cerateUploader("brand"),
  productUploader: cerateUploader("product")
}