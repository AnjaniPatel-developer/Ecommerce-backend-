const User = require("../models/User")
const mongoose = require("mongoose")
const passwordValidator = require('password-validator');
const bcrypt = require("bcrypt")
// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have at least 1 lowercase letters
    .has().digits(1)                                // Must have at least 1 digits
    .has().symbols(1)                                // Must have at least 1 symbols
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values





async function createRecord(req, res) {
    if (schema.validate(req.body.password))
        bcrypt.hash(req.body.password, 12, async (error, hash) => {

            if (error) {
                console.log(error)
                res.status(500).send({
                    result: "Fail",
                    reasion: "Internal Server Error While  Creating Hash Password "
                })
            }

            try {
                let data = new User(req.body)

                data.role = "Buyer"
                data.password = hash

                await data.save()

                res.send({

                    status: "Done",
                    data: data
                })

            } catch (error) {

                let errorMessage = {}

                if (error.keyValue) {
                    error.keyValue.username ? errorMessage.username = "Username Already Taken" : ''
                    error.keyValue.email ? errorMessage.email = "email Address Already Taken" : ''
                }

                else {
                    errorMessage = Object.fromEntries(
                        Object.keys(error.errors).map(
                            key => [key, error.errors[key].message]
                        )
                    )
                }

                res.status(500).send({
                    status: "Fail",
                    reason: errorMessage
                })
            }
        })

    else {
        res.status(500).send({
            result: "Fail",
            reason: schema.validate(req.body.password, { details: true }).map(x => x.message.replaceAll("string", "password"))
        })
    }


}


async function getRecord(req, res) {

    try {
        let data = await User.find().sort({ _id: -1 })
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
        let data = await User.findOne({ _id: req.params._id })
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
        let data = await User.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.username = req.body.username ?? data.username
            data.email = req.body.email ?? data.email
            data.address = req.body.address ?? data.address
            data.role = req.body.role ?? data.role
            data.status = req.body.status ?? data.status
            await data.save()



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
        let errorMessage = {}
        if (error.keyValue) {

            error.keyValue.username ? errorMessage.username = "Username Already Taken" : ''
            error.keyValue.email ? errorMessage.email = "email Address Already Taken" : ''

        }

        else
            errorMessage = Object.fromEntries(Object.keys(error.errors).map(key => [key, error.errors[key].message]))
        res.status(500).send({
            status: "Fail",
            reason: errorMessage
        })

    }
}
async function deleteRecord(req, res) {

    try {

        let data = await User.findOne({ _id: req.params._id })

        if (data) {

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
async function login(req, res) {

    try {
        let data = await User.findOne({ 
        $or: [
            { username: req.body.username },
            { email: req.body.username }
        ]
    })
        if (await bcrypt.compare(req.body.password, data.password)) {
            res.send({
                result: "Done",
                data: data
            })
        }
        else {
            res.status(404).send({
                result: "Fail",
                reason: "Invalid Username Or password"
            })
        }
    } catch (error) {
        console.log(error)
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
    login: login,


}