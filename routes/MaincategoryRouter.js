const MaincategoryRouter = require("express").Router()
const {maincategoryUploader} = require("../middleware/fileUploader")
const {
    createRecord,
    getRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord,


}=require("../controllers/MaincategoryController.js")

MaincategoryRouter.post("",maincategoryUploader.single("pic"), createRecord)
MaincategoryRouter.get("",getRecord)
MaincategoryRouter.get("/:_id",getSingleRecord)
MaincategoryRouter.put("/:_id",maincategoryUploader.single("pic"),updateRecord)
MaincategoryRouter.delete("/:_id",deleteRecord)

module.exports =MaincategoryRouter