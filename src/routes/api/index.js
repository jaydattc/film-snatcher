const api = require("express").Router()
const { check, validationResult } = require("express-validator")
const db = require("../../db/")
const Movies = db.collection("movies")

api.post(
  "/add",
  [
    check("movieId").isString(),
    check("resources").custom((value, { req }) => {
      if (!value) {
        throw new Error("Invalid resource object!")
      } else if (
        value &&
        value.resourceName &&
        value.addedBy &&
        value.resourceUri
      ) {
        return true
      }
      throw new Error("Invalid resource object (format)!")
    }),
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    const { movieId, resources } = req.body
    Movies.findOne({ movieId }, (err, movie) => {
      if (err) {
        console.log(err)
        return res
          .status(500)
          .json({ error: "Error while fetching from database!" })
      }
      if (movie) {
        Movies.update({ movieId }, { $push: { resources } }, (err, result) => {
          if (err) {
            console.log(err)
            return res
              .status(500)
              .json({ error: "Error while insertion into database!" })
          }
          return res.json(result)
        })
      } else {
        Movies.insert({ movieId, resources: [resources] }, (err, movie) => {
          if (err) {
            console.log(err)
            return res
              .status(500)
              .json({ error: "Error while insertion into database!" })
          }
          return res.json(movie)
        })
      }
    })
  }
)

api.get("/get/", async (req, res) => {
  Movies.find({}).toArray((err, movies) => {
    if (err) {
      console.log(err)
      return res
        .status(500)
        .json({ error: "Error while fetching from database!" })
    }
    return res.json(movies)
  })
})

api.get("/get/:movieId", (req, res) => {
  if (req.params && req.params.movieId) {
    const { movieId } = req.params
    Movies.findOne({ movieId }, (err, movie) => {
      if (err) {
        console.log(err)
        return res
          .status(500)
          .json({ error: "Error while fetching from database!" })
      }
      return res.json(movie || {})
    })
  } else res.json({ error: "invalid movie id!" })
})

module.exports = api
