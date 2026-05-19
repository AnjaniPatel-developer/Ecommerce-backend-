const Product = require("../models/Product")
const fs = require("fs")

async function createRecord(req, res) {

    try {
        let data = new Product(req.body)
        if (req.files)
            data.pic = Array.from(req.files).map((x) => x.path)

        await data.save()
        let finalData = await Product.findOne({ _id: data._id })
            .populate("maincategory", ["name"])
            .populate("subcategory", ["name"])
            .populate("brand", ["name"])

        res.send({

            status: "Done",
            data: finalData
        })

    } catch (error) {
        if (req.files) {
            try {
                Array.from(req.files).forEach(x => fs.unlinkSync(x.path))
            } catch (error) {

            }
        }
        let errorMessage = {}
        if (error.keyValue)
            errorMessage = "Product With this Name Is Already Exist"
        else
            errorMessage = Object.fromEntries(Object.keys(error.errors).map(key => [key, error.errors[key].message]))
        res.status(500).send({
            status: "Fail",
            reason: errorMessage
        })

    }
}

async function getRecord(req, res) {

    try {
        let data = await Product.find().sort({ _id: -1 })
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
async function getSingleRecord(req, res) {

    try {
        let data = await Product.findOne({ _id: req.params._id })
        if (data) {
            res.send({
                result: "Done",
                data: data
            })

        }
        else {
            res.status(404).send({
                result: "Fail",
                reason: "Record not Found"
            })
        }
    } catch (error) {
        res.status(500).send({
            result: "Fail",
            reason: "Internal Server Error"
        })

    }
}
async function updateRecord(req, res) {
    try {

        let data = await Product.findOne({ _id: req.params._id })
             
            .populate("maincategory", ["name"])
            .populate("subcategory", ["name"])
            .populate("brand", ["name"])
        if (data) {

            data.name = req.body.name ?? data.name
            data.maincategory = req.body.maincategory ?? data.maincategory
            data.subcategory = req.body.subcategory ?? data.subcategory
            data.brand = req.body.brand ?? data.brand
            data.color = req.body.color ?? data.color
            data.size = req.body.size ?? data.size
            data.basePrice = req.body.basePrice ?? data.basePrice
            data.discount = req.body.discount ?? data.discount
            data.finalPrice = req.body.finalPrice ?? data.finalPrice
            data.stock = req.body.stock ?? data.stock
            data.stockQantity = req.body.stockQantity ?? data.stockQantity
            data.discription = req.body.discription ?? data.discription
            data.status = req.body.status ?? data.status

            if (req.body.oldPics?.length === 0 && req.files?.length === 0) {

                return res.send({
                    result: "fail",
                    reason: "Please Upload Atleast One Image or Keep Atleast One Old Image"
                })

            }
            else if (req.body.oldPics?.length !== 0 && req.files?.length === 0) {

                data.pic.forEach(x => {

                    if (!(req.body.oldPics).includes(x)) {

                        try {
                            fs.unlinkSync(x)
                        }
                        catch (error) { }

                    }

                })

                data.pic = req.body.oldPics

                await data.save()

                res.send({
                    result: "Done",
                    data: data
                })
            }
            else if (req.files && req.files.length > 0) {

                let oldPics = req.body.oldPics || []

                data.pic.forEach(x => {

                    if (!(oldPics).includes(x)) {

                        try {
                            fs.unlinkSync(x)
                        }
                        catch (error) { }

                    }

                })

                data.pic = oldPics.concat(
                    Array.from(req.files).map(x => x.path)
                )

                await data.save()

                res.send({
                    result: "Done",
                    data: data
                })
            }
        }
        else {

            res.status(404).send({
                result: "Fail",
                reason: "Record not Found"
            })

        }

    }
    catch (error) {

        req.files?.forEach(x => {

            try {
                fs.unlinkSync(x.path)
            }
            catch (error) { }

        })

        let errorMessage = {}

        if (error.keyValue) {

            errorMessage = "Product With this Name Is Already Exist"

        }
        else if (error.errors) {

            errorMessage = Object.fromEntries(
                Object.keys(error.errors).map(key => [
                    key,
                    error.errors[key].message
                ])
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

async function deleteRecord(req, res) {

    try {
        let data = await Product.findOne({ _id: req.params._id })
        if (data) {
            try {
                data.pic.forEach(x => fs.unlinkSync(x))
            } catch (error) {

            }

            await data.deleteOne()
            res.send({
                result: "Done",

            })

        }

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
    getSingleRecord: getSingleRecord,
    updateRecord: updateRecord,
    deleteRecord: deleteRecord,

}