import React, { useState, useEffect } from "react"
import {
  Stack,
  Image,
  Flex,
  Heading,
  Badge,
  Text,
  Divider,
  Grid,
  Box,
  FormControl,
  FormLabel,
  Button,
  Link as A,
  Input,
} from "@chakra-ui/core"
import { getMovieDetails, getMovieResources, addMovie } from "../services/api"
import qs from "qs"
import Layout from "../components/layout"

const MovieDetails = props => {
  const [movieDetails, setMovieDetails] = useState({})
  const [resourceName, setResourceName] = useState("")
  const [resourceUri, setResourceUri] = useState("")
  const [addedBy, setAddedBy] = useState("")

  const [movieResources, setMovieResources] = useState([])

  useEffect(() => {
    const query = qs.parse(props.location.search.slice(1))
    if (query && query.movie_id) {
      getMovieDetails(query.movie_id).then(res => {
        setMovieDetails(res.data)
      })
      refreshMovieResources()
    }
  }, [])

  const refreshMovieResources = () =>
    getMovieResources(
      qs.parse(props.location.search.slice(1)) &&
        qs.parse(props.location.search.slice(1)).movie_id
    ).then(res => {
      setMovieResources(res.data && res.data.resources)
    })

  const handleAdd = e => {
    e.preventDefault()
    addMovie({
      movieId: qs.parse(props.location.search.slice(1)).movie_id,
      resources: { resourceName, addedBy, resourceUri },
    }).then(res => {
      setAddedBy("")
      setResourceName("")
      setResourceUri("")
      refreshMovieResources()
    })
  }

  return (
    <Layout>
      <Stack Flex border="1px solid gray" borderRadius="5px">
        <Text as="div" color="cadetblue" p="4px" m="0 !important" w="100%">
          <Flex flexDir="row" height="150px">
            <Image
              mx="10px"
              height="150px"
              src={
                "https://image.tmdb.org/t/p/w185_and_h278_bestv2" +
                movieDetails.poster_path
              }
            />
            <Flex
              flexDir="column"
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              <Heading m="0" size="sm">
                {movieDetails.title}
              </Heading>
              <Badge variantColor="pink">{movieDetails.release_date}</Badge>
              <Text mt={2} fontSize="sm" lineHeight="short">
                {movieDetails.overview}
              </Text>
            </Flex>
          </Flex>
        </Text>
        <Divider />
        <Box px="20px">
          <Heading size="md">Add resource:</Heading>
          <form onSubmit={handleAdd}>
            <FormControl>
              <FormLabel htmlFor="resourceName">Resource name</FormLabel>
              <Input
                type="text"
                id="resourceName"
                value={resourceName}
                onChange={e => setResourceName(e.target.value)}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="resourceUri">Resource URL</FormLabel>
              <Input
                type="text"
                id="resourceUri"
                value={resourceUri}
                onChange={e => setResourceUri(e.target.value)}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="addedBy">Added by</FormLabel>
              <Input
                type="text"
                id="addedBy"
                value={addedBy}
                onChange={e => setAddedBy(e.target.value)}
              ></Input>
            </FormControl>

            <Button type="submit" m="10px" float="right">
              Add
            </Button>
          </form>
        </Box>{" "}
        <Divider />
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box px="10px" w="100%" h="10">
            <Text fontWeight="bold">Resource Name</Text>
          </Box>
          <Box px="10px" h="10">
            <Text fontWeight="bold">Resource URL</Text>
          </Box>
          <Box px="10px" w="100%" h="10">
            <Text fontWeight="bold">Added by</Text>
          </Box>
          {movieResources &&
            movieResources.map(movie => (
              <>
                <Box px="10px" h="10" key={movie.resourceName + Math.random()}>
                  <Text>{movie.resourceName}</Text>
                </Box>
                <Box
                  px="10px"
                  h="10"
                  key={movie.resourceUri + Math.random()}
                  style={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  <A href={movie.resourceUri} target="_blank">
                    {movie.resourceUri}
                  </A>
                </Box>
                <Box px="10px" h="10" key={movie.addedBy + Math.random()}>
                  <Text>{movie.addedBy}</Text>
                </Box>
              </>
            ))}
        </Grid>
      </Stack>
    </Layout>
  )
}

export default MovieDetails
