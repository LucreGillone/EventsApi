const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    image: {type: String, required: true}, 
    date: {type: String, required: true},
    description: {type: String, required: true}, 
    category: {type: String, required: true},
    place: {type: String, required: true},
    capacity: {type: String, required: true},
    assistance: {type: String},
    estimate: {type: String},
    price: {type: Number, required: true}
})

const Event = mongoose.model("event", eventSchema)

module.exports = Event