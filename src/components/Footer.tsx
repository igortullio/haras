import { Box, List, ListItem, ListIcon, Flex, Text, Link } from '@chakra-ui/react'
import { FaMapMarker, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export const Footer = () => (
  <Box as="footer" pb={5}>
    <List as="nav" fontSize="16px" display="flex" justifyContent="center">
      <ListItem px={5}>
        <Flex alignItems="center">
          <ListIcon as={FaMapMarker} />
          <Text>Brasília, Brasil</Text>
        </Flex>
      </ListItem>
      <ListItem px={5}>
        <Flex alignItems="center">
          <ListIcon as={FaWhatsapp} />
          <Text>61 91234 5678</Text>
        </Flex>
      </ListItem>
      <ListItem px={5}>
        <Flex alignItems="center">
          <ListIcon as={FaEnvelope} />
          <Text>contact@haras.com</Text>
        </Flex>
      </ListItem>
    </List>
    <Text textAlign="center">
      Copyright ©2021 All rights reserved | Developed by{' '}
      <Link color="#ee4266" href="https://github.com/igortullio/" isExternal>
        Igor Túllio
      </Link>
    </Text>
  </Box>
)
