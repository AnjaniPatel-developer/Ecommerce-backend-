const ProductRouter = require("express").Router()
const {productUploader} = require("../middleware/fileUploader.js")
const {
    createRecord,
    getRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord,


}=require("../controllers/ProductController.js")

ProductRouter.post("",productUploader.array("pic"), createRecord)
ProductRouter.get("",getRecord)
ProductRouter.get("/:_id",getSingleRecord)
ProductRouter.put("/:_id",productUploader.array("pic"),updateRecord)
ProductRouter.delete("/:_id",deleteRecord)

module.exports =ProductRouter