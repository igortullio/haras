import { Flex, Heading } from '@chakra-ui/layout'
import { Card } from 'components/Card'

export const Products = () => {
  return (
    <Flex my={6} direction="column">
      <Heading as="h2" mb={4} fontSize="30px" textTransform="uppercase">
        Products
      </Heading>
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </Flex>
  )
}
