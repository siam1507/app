const mongoose = require("mongoose")

var RoomSchema = new mongoose.Schema({
    UID : {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    RID: {
        type : String
    }
})

var Room = mongoose.model("Room", RoomSchema);

module.exports = {
    Room
}