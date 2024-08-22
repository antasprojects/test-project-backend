const express = require("express")
const cors = require("cors")

const logger = require('./logger')
const rangersRouter = require("./router/rangers")

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger)

app.get("/", (req, res) => {
    res.send("Hello World!")
})


app.use('/rangers', rangersRouter)

module.exports = app