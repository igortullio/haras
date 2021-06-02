import { Flex, Grid, Image, Heading, Button, useColorMode } from '@chakra-ui/react'

export const Banner = () => {
  const { colorMode } = useColorMode()

  const color = { light: 'gray.50', dark: 'gray.900' }
  const bgColor = { light: 'black', dark: 'white' }

  return (
    <Grid templateColumns="repeat(2, 1fr)" border="1px">
      <Image src="images/1.jpg" />

      <Flex direction="column" alignItems="center" alignSelf="center" p="15px" textAlign="center">
        <Heading as="h3" fontSize="14px">
          #New Summer Collection 2021
        </Heading>
        <Heading as="h1" fontSize="70px" textTransform="uppercase" my="30px">
          arrivals sales
        </Heading>
        <Button
          height="48px"
          width="180px"
          color={color[colorMode]}
          bg={bgColor[colorMode]}
          borderRadius="none"
          textTransform="uppercase"
          _hover={{ bg: bgColor[colorMode] }}
          _focus={{ bg: 'white.50' }}
        >
          shop now
        </Button>
      </Flex>
    </Grid>
  )
}
