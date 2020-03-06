const Db = require("tingodb")().Db
const path = require("path")
const db = new Db(path.join(__dirname, "./db-temp/"), {})

module.exports = db
