const CartRouter = require("express").Router()

const {
    createRecord,
    getRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord,


}=require("../controllers/CartController.js")

CartRouter.post("", createRecord)
CartRouter.get("",getRecord)
CartRouter.get("/:_id",getSingleRecord)
CartRouter.put("/:_id",updateRecord)
CartRouter.delete("/:_id",deleteRecord)

module.exports =CartRouter