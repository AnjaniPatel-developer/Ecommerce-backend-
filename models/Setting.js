const mongoose = require("mongoose")


const SettingSchema = new mongoose.Schema({
    siteName: {
        type: String,
        default: "",
    },
    map1: {
        type: String,
        default: "",
    },
    map2: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        default: "",
    },
    instagram: {
        type: String,
        default: "",
    },
    facebook: {
        type: String,
        default: "",
    },
    whatsapp: {
        type: String,
        default: "",
    },
    twitter: {
        type: String,
        default: "",
    },
    youtube: {
        type: String,
        default: "",
    },

    linkedin: {
        type: String,
        default: "",
    },

    privacypolice: {
        type: String,
        default: "",
    },

    termAndCondition: {
        type: String,
        default: "",
    },






})
const Setting = mongoose.model("Setting", SettingSchema);
module.exports = Setting;