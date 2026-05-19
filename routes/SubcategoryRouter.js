const SubcategoryRouter = require("express").Router()
const {subcategoryUploader} = require("../middleware/fileUploader.js")
const {
    createRecord,
    getRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord,


}=require("../controllers/SubcategoryController.js")

SubcategoryRouter.post("",subcategoryUploader.single("pic"), createRecord)
SubcategoryRouter.get("",getRecord)
SubcategoryRouter.get("/:_id",getSingleRecord)
SubcategoryRouter.put("/:_id",subcategoryUploader.single("pic"),updateRecord)
SubcategoryRouter.delete("/:_id",deleteRecord)

module.exports =SubcategoryRouter