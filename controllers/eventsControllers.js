const Event = require("../models/Event")
const jwt = require('jsonwebtoken')


const eventsControllers = {

    getAllEvents: async (req, res) => {
        try {
            const events = await Event.find()
            res.json({currentDate: "2022-01-01", events: events})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },

    addEvent : async (req, res) => {
        if (req.user && req.user.username === 'administrador' &&  req.user.password === 'MindHub2022') {   
            const newEvent = new Event({
                image: req.body.image, 
                date: req.body.date,
                description: req.body.description,
                category: req.body.category,
                place: req.body.place,
                capacity: req.body.capacity,
                assistance: req.body.assistance,
                estimate: req.body.estimate,
                price: req.body.price
            })
            try {
                await newEvent.save()
                res.json({success: true})
            } catch (error) {
                res.json({success: false, response: error.message})
            }
        }
    },
    
    getOneEvent: async (req, res) => {
        try {
            const event = await Event.findOne({_id: req.params.id})
            res.json({success: true, response: event})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    }, 

    modifyEvent: async (req, res) => {
        if (req.user && req.user.username === 'administrador' &&  req.user.password === 'MindHub2022') {
            try {
                const modifiedEvent = await Event.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
                res.json({success: true, response: modifiedEvent})
            } catch (error) {
                res.json({success: false, response: error.message})
            }
        }
    }, 

    deleteEvent: async (req, res) => {
        if (req.user && req.user.username === 'administrador' &&  req.user.password === 'MindHub2022') {
            try {
                const deleteEvent = await Event.findOneAndDelete({_id: req.params.id})
                res.json({success: true, response: deleteEvent})
            } catch (error) {
                res.json({success: false, response: error.message})
            }
        }
    },
    getToken: async (req,res) =>{
        const {username,password} = req.body
        const token = jwt.sign({username,password},process.env.SECRETORKEY)
        res.json({success: true,accessToken: token})
        
    }

}

module.exports = eventsControllers