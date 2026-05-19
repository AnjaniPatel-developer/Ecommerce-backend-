const SettingRouter = require("express").Router()

const {
    createRecord,
    getRecord,
   


}=require("../controllers/SettingController.js")

SettingRouter.post("", createRecord)
SettingRouter.get("",getRecord)


module.exports =SettingRouter