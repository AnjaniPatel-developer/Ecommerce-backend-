const CheckoutRouter = require("express").Router()

const {
    createRecord,
    getRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord,


}=require("../controllers/CheckoutController.js")

CheckoutRouter.post("", createRecord)
CheckoutRouter.get("",getRecord)
CheckoutRouter.get("/:_id",getSingleRecord)
CheckoutRouter.put("/:_id",updateRecord)
CheckoutRouter.delete("/:_id",deleteRecord)

module.exports =CheckoutRouter