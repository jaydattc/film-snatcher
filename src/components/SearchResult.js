import React from "react"
import {
  Stack,
  Image,
  Flex,
  Heading,
  Badge,
  Text,
  Link as A,
} from "@chakra-ui/core"
import { Link } from "gatsby"

const SearchResult = props => {
  const { searchResult } = props
  return (
    <Stack Flex border="1px solid gray" borderRadius="5px">
      {searchResult.map((movie, i) => (
        <A
          as={Link}
          color="cadetblue"
          to={`/m?movie_id=${movie.id}`}
          p="4px"
          m="0 !important"
          w="100%"
          bg={i % 2 ? "white" : "#f0f0f0"}
        >
          <Flex flexDir="row" height="150px">
            <Image
              mx="10px"
              height="150px"
              src={
                "https://image.tmdb.org/t/p/w185_and_h278_bestv2" +
                movie.poster_path
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
                {movie.title}
              </Heading>
              <Badge variantColor="pink">{movie.release_date}</Badge>
              <Text mt={2} fontSize="sm" lineHeight="short">
                {movie.overview}
              </Text>
            </Flex>
          </Flex>
        </A>
      ))}
    </Stack>
  )
}

export default SearchResult
