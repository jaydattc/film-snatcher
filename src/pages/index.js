import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { InputGroup, InputRightElement, Input, Spinner } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getMovies, getMovieDetails, search } from "../services/api"
import axios from "axios"
import SearchResult from "../components/SearchResult"

const IndexPage = () => {
  const [searchValue, setSearchValue] = useState("")
  const [movies, setMovies] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cancelToken, setCancelToken] = useState(null)

  useEffect(() => {
    getMovies().then(data => {
      setMovies(data.movies)
    })
  }, [])
  useEffect(() => {
    if (searchValue && searchValue.length)
      search(searchValue).then(res => {
        console.log(res)
        if (res.data && res.data.results && res.data.results.length)
          setSearchResult(res.data.results)
      })
  }, [searchValue])

  return (
    <Layout>
      <SEO title="Home" />
      <InputGroup size="lg">
        <Input
          type="text"
          placeholder="Search movies..."
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <InputRightElement>
          {isSearching && <Spinner size="sm" />}
        </InputRightElement>
      </InputGroup>
      {searchResult && searchResult.length ? (
        <SearchResult searchResult={searchResult} />
      ) : (
        ""
      )}
    </Layout>
  )
}
export default IndexPage
