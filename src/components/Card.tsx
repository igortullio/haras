import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react'

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

export const Card = () => {
  return (
    <Box role="group" p={6} w="330px" border="1px" mb={10} cursor="pointer">
      <Box height="230px">
        <Image rounded="lg" height={230} width={282} objectFit="cover" src={IMAGE} />
      </Box>

      <Stack pt={10} align="center">
        <Text color="gray.500" fontSize="sm" textTransform="uppercase">
          Brand
        </Text>
        <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
          Nice Chair, pink
        </Heading>
        <Stack direction="row" align="center">
          <Text fontWeight={800} fontSize="xl">
            $57
          </Text>
          <Text textDecoration="line-through" color="gray.600">
            $199
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}
