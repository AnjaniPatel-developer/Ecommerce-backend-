const Setting = require("../models/Setting")


async function createRecord(req, res) {

    try {
        let data = await Setting.findOne()
        if (data) {
            data.siteName = req.body.siteName ?? data.siteName
            data.map1 = req.body.map1 ?? data.map1
            data.map2 = req.body.map2 ?? data.map2
            data.email = req.body.email ?? data.email
            data.address = req.body.address ?? data.address
            data.phone = req.body.phone ?? data.phone
            data.instagram = req.body.instagram ?? data.instagram
            data.facebook = req.body.facebook ?? data.facebook
            data.whatsapp = req.body.whatsapp ?? data.whatsapp
            data.linkedin = req.body.linkedin ?? data.linkedin
            data.youtube = req.body.youtube ?? data.youtube
            data.privacyAndPolicy = req.body.privacyAndPolicy ?? data.privacyAndPolicy
            data.termAndCondition = req.body.termAndCondition ?? data.termAndCondition

        }
        else {
            data = new Setting(req.body)
        }
        await data.save()
        res.send({
            status: "Done",
            data: data
        })
    }
    catch (error) {

        let errorMessage = {}

        if (error.keyValue) {
            errorMessage = "Setting With this Name Is Already Exist"
        }
        else if (error.errors) {
            errorMessage = Object.fromEntries(
                Object.keys(error.errors).map(
                    key => [key, error.errors[key].message]
                )
            )
        }
        else {
            errorMessage = error.message
        }

        res.status(500).send({
            status: "Fail",
            reason: errorMessage
        })
    }
}


async function getRecord(req, res) {

    try {
        let data = await Setting.find().sort({ _id: -1 })
        res.send({
            result: "Done",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            result: "Fail",
            reason: "Internal Server Error"
        })

    }
}
module.exports = {
    createRecord: createRecord,
    getRecord: getRecord,


}