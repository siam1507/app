console.log("app started")

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const {User} = require("./database/User")
const {Device} = require("./database/Device")

const connection = mongoose.connect("mongodb://siam:siam1507@ds159293.mlab.com:59293/automation", {useNewUrlParser: true})



app.get("/", function (req, res){
    res.send("<h3>SmartWaves</h3>")
})


app.get("/login/:username/:password", function(req,res)
{
          
        var username = req.params.username
        var password = req.params.password 
        var userId   = "abc" 

  
    var newDevice =   Device.find({name: username, Password: password}, function(err, foundDevice) {

          
});
        
     console.log(newDevice._id);     
   res.json({
            msg : "successfully logon to ",
            id : newDevice._id
            })         
        
    


 });







app.get("/D/:did/:status", function(req,res)
{
          console.log("reached upto reading value") 
        var DeviceID = req.params.did
        var deviceStatus = req.params.status
        
        
var selectedDevice =  Device.findOneAndUpdate({_id: DeviceID}, {$set:{status:deviceStatus}}, {new: true}, (err, doc) => {

     if (err) {
        console.log("Something wrong when updating data!");
    }

    console.log(doc);
});
     res.json({
            msg : "Device value was changed..............",
            status : selectedDevice.status
            })
        
    });

 /*       Device.findById(DeviceID).then(
        Device => {
            if(!Device) {
               return res.json({error : "error"}) 
            }
            var preStatus = Device.status
            Device.status = deviceStatus
            res.json({
            msg : "Device value was changed",
            stat : Device.status
            })
        }),

        err => {
            res.status(404).send(err)
        }
})*/
     
        
       
        
        
    
                                        
        
              

app.get("/D/:status", function (req, res){
   
    var newDevice = new Device()
    newDevice.status = req.params.status
    console.log("reached upto reasing")        
    newDevice.save(function(err) {
        if (err) res.send(err)
        res.json({
            status : newDevice.status,
            id: newDevice.id,
            msg : "A new device was connected and saved to database Device Id "
        })
    })
})

    
    
    
app.get("/User/:name/:password", function (req, res){
    var newUser = new User()
    
    newUser.name = req.params.name
    newUser.password = req.params.password
    
    newUser.save(function(err) {
        if (err) res.send(err)
        res.json({
            name : newUser.name,
            password : newUser.password,
            id : newUser._id,
            msg : "saved to database"
        })
    })
})





app.listen(3000, function () {
    console.log("server running on port " + 3000)
})
    