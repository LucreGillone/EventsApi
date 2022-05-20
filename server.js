const cors = require("cors")
const express = require("express")
const passport = require("passport")
require("dotenv").config()
require("./config/database")
require("./config/passport")
const app = express()
const router = require("./routes/routes")

//Middlewares
app.use(cors())
app.use(express.json())

app.use("/api", router)

app.listen(4000, () => console.log("Server running on port 4000"))