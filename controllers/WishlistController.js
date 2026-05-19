const Wishlist = require("../models/Wishlist");

async function createRecord(req, res) {
    try {
        let data = new Wishlist
(req.body);

        if (req.files) {
            data.pic = Array.from(req.files).map((x) => x.path);
        }

        await data.save();

        let finalData = await Wishlist
.findOne({ _id: data._id })
            .populate("user", "name")
            .populate({
                path: "product",
                select: "name brand finalPrice stockQuantity pic",
                populate: {
                    path: "brand",
                    select: "name -_id"
                },
                options: {
                    slice: {
                        pic: 1
                    }
                }
            });

        res.send({
            status: "Done",
            data: finalData
        });

    } catch (error) {
        console.log(error)
        let errorMessage = {};

        if (error.errors) {
            errorMessage = Object.fromEntries(
                Object.keys(error.errors).map(key => [
                    key,
                    error.errors[key].message
                ])
            );
        }

        res.status(500).send({
            status: "Fail",
            reason: errorMessage || error.message
        });
    }
}

async function getRecord(req, res) {
    try {
        let data = await Wishlist
.find()
            .populate("user", "name")
            .populate({
                path: "product",
                select: "name brand finalPrice stockQuantity pic",
                populate: {
                    path: "brand",
                    select: "name -_id"
                },
                options: {
                    slice: {
                        pic: 1
                    }
                }
            });

        res.send({
            result: "Done",
            data: data
        });

    } catch (error) {
        let errorMessage = {};

        if (error.errors) {
            errorMessage = Object.fromEntries(
                Object.keys(error.errors).map(key => [
                    key,
                    error.errors[key].message
                ])
            );
        }

        res.status(500).send({
            status: "Fail",
            reason: errorMessage || error.message
        });
    }
}

async function getSingleRecord(req, res) {
    try {
        let data = await Wishlist
.findOne({ _id: req.params._id })
            .populate("user", "name")
            .populate({
                path: "product",
                select: "name brand finalPrice stockQuantity pic",
                populate: {
                    path: "brand",
                    select: "name -_id"
                },
                options: {
                    slice: {
                        pic: 1
                    }
                }
            });

        if (data) {
            res.send({
                result: "Done",
                data: data
            });
        } else {
            res.status(404).send({
                result: "Fail",
                reason: "Record not Found"
            });
        }

    } catch (error) {
        res.status(500).send({
            result: "Fail",
            reason: error.message
        });
    }
}

async function updateRecord(req, res) {
    try {
        let data = await Wishlist
.findOne({ _id: req.params._id })
            .populate("user", "name")
            .populate({
                path: "product",
                select: "name brand finalPrice stockQuantity pic",
                populate: {
                    path: "brand",
                    select: "name -_id"
                },
                options: {
                    slice: {
                        pic: 1
                    }
                }
            });

        if (data) {
          

            await data.save();

            res.send({
                result: "Done",
                data: data
            });
        } else {
            res.status(404).send({
                result: "Fail",
                reason: "Record not Found"
            });
        }

    } catch (error) {
        let errorMessage = {};

        if (error.errors) {
            errorMessage = Object.fromEntries(
                Object.keys(error.errors).map(key => [
                    key,
                    error.errors[key].message
                ])
            );
        }

        res.status(500).send({
            status: "Fail",
            reason: errorMessage || error.message
        });
    }
}

async function deleteRecord(req, res) {
    try {
        let data = await Wishlist
.findOne({ _id: req.params._id });

        if (data) {
            await data.deleteOne();

            res.send({
                result: "Done"
            });
        } else {
            res.status(404).send({
                result: "Fail",
                reason: "Record not Found"
            });
        }

    } catch (error) {
        res.status(500).send({
            result: "Fail",
            reason: error.message
        });
    }
}

module.exports = {
    createRecord,
    getRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord
};