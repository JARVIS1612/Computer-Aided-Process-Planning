const mongoose = require("mongoose");

mongoose
    .connect(`mongodb+srv://admin:vaibhav   @vaibhav.ki2u279.mongodb.net/?retryWrites=true&w=majority&appName=Vaibhav`)
    .then(() => {
        console.log("Database Connected");
    })
    .catch(() => {
        console.log("Can't connect to DB");
    });

const capp_schema = new mongoose.Schema({
    rout_sheet: {
        type: String,
        required: true,
    },
    part_family: {
        type: String,
        required: true,
    },
    threeD_model: {
        type: String,
        require: true,
    },
});

const collection = new mongoose.model("CAPP_Schema", capp_schema);

module.exports = collection;
