import React from "react"
import { Box, Image, Flex, Text, MdStar } from "@chakra-ui/core"
const MoviePoster = props => {
  return (
    <Box>
      <Image rounded="md" src="https://bit.ly/2k1H1t6" />
      <Flex align="baseline" mt={2}>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          Verified &bull; Cape Town
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Modern, Chic Penthouse with Mountain, City & Sea Views
      </Text>
      <Text mt={2}>$119/night</Text>
      <Flex mt={2} align="center">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontsize="sm">
          <b>4.84</b> (190)
        </Text>
      </Flex>
    </Box>
  )
}

export default MoviePoster
