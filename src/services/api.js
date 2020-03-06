import axios from "axios"
import qs from "qs"

const api_key = "a0c8dc9403378434c23959a310458069"

export const movieDbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
})
const backendApi = axios.create({
  baseURL: "http://localhost:3000/api/",
})

export const search = query =>
  movieDbApi.get(`/search/movie?${qs.stringify({ api_key, query, page: 1 })}`)
export const getMovieDetails = id =>
  movieDbApi.get(`/movie/${id}?api_key=a0c8dc9403378434c23959a310458069`)

export const addMovie = movie => backendApi.post(`/add`, movie)
export const getMovies = () => backendApi.get(`/get`)
export const getMovieResources = id => backendApi.get(`/get/${id}`)

export default backendApi
