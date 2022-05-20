const express = require("express")
const router = express.Router()
const eventsControllers = require("../controllers/eventsControllers")

const {getAllEvents, addEvent, modifyEvent, deleteEvent, getOneEvent} = eventsControllers

router.route("/events")
.get(getAllEvents)
.post(addEvent)

router.route("/events/:id")
.get(getOneEvent)
.put(modifyEvent)
.delete(deleteEvent)

module.exports = router