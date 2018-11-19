const mongoose = require("mongoose")

var DeviceSchema = new mongoose.Schema({   
    status: 
    {
        type : String,
    }
})

var Device = mongoose.model("Device", DeviceSchema);

module.exports = {
    Device
}