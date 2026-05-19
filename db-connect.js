const mongoose = require("mongoose");
mongoose.connect(process.env.DB_KEY)
.then(() => {
    console.log("server is conected")
}).catch((err) => {
    console.log(error)
});