const express = require("express")
const router = express.Router()
const eventsControllers = require("../controllers/eventsControllers")
const passport = require("../config/passport")
const {getAllEvents, addEvent, modifyEvent, deleteEvent, getOneEvent,getToken} = eventsControllers

router.route("/events")
.get(getAllEvents)
.post(passport.authenticate('jwt',{session: false}),addEvent)

router.route("/events/:id")
.get(getOneEvent)
.put(passport.authenticate('jwt',{session: false}),modifyEvent)
.delete(passport.authenticate('jwt',{session: false}),deleteEvent)

router.route("/admin")
.post(getToken)

module.exports = router