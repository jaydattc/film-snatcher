"use strict"
require("dotenv").config()

const path = require("path")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
const bodyParser = require("body-parser")
const apiRouter = require("./routes/api/")

const app = express()

const db = require("./db/")
if (!db) {
  console.log("Error while connecting local db!")
  process.exit(-1)
}

app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

if (process.env.NODE_ENV !== "test") app.use(morgan("dev"))

app.use("/api", apiRouter)
app.use(express.static(path.join(__dirname, "./routes/static/")))

module.exports = () =>
  app.listen(process.env.PORT, err => {
    if (err) {
      console.log(`Error : ${err}`)
      process.exit(-1)
    }

    console.log(`${process.env.APP} is running on ${process.env.PORT}`)
  })
