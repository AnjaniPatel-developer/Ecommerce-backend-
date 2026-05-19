const BrandRouter = require("express").Router()
const {brandUploader} = require("../middleware/fileUploader.js")
const {
    createRecord,
    getRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord,


}=require("../controllers/BrandController.js")

BrandRouter.post("",brandUploader.single("pic"), createRecord)
BrandRouter.get("",getRecord)
BrandRouter.get("/:_id",getSingleRecord)
BrandRouter.put("/:_id",brandUploader.single("pic"),updateRecord)
BrandRouter.delete("/:_id",deleteRecord)

module.exports =BrandRouter