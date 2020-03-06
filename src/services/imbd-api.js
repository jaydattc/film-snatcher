import axios from "axios"
import qs from "qs"

const imDbApi = axios.create({
  baseUrl: "https://movie-database-imdb-alternative.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    "x-rapidapi-key": "3facd34c99msh09d66365b811d5fp1a954cjsn6b5b2722b7b4",
  },
})

exports.search = string =>
  imDbApi.get(`/${qs.stringify({ page: 1, f: "json", s: string })}`)

exports.getMovie = id => imDbApi.get(`/${qs.stringify({ i: id, f: "json" })}`)

export default imDbApi
