const WishlistRouter = require("express").Router()

const {
    createRecord,
    getRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord,


}=require("../controllers/WishlistController.js")

WishlistRouter.post("", createRecord)
WishlistRouter.get("",getRecord)
WishlistRouter.get("/:_id",getSingleRecord)
WishlistRouter.put("/:_id",updateRecord)
WishlistRouter.delete("/:_id",deleteRecord)

module.exports =WishlistRouter