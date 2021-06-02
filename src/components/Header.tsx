import {
  Flex,
  Spacer,
  Box,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import { DarkModeSwitch } from 'components/DarkModeSwitch'
import { Icon, useDisclosure } from '@chakra-ui/react'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import Link from 'next/link'

export type HeaderProps = {}

export const Header = ({}: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex as="header" py={4} alignItems="center" textTransform="uppercase">
        <Link href="/">
          <Box as="a" cursor="pointer" py={1} px={4} border="2px solid" fontSize="20px" letterSpacing=".2em">
            haras
          </Box>
        </Link>

        <Spacer />

        <List as="nav" display="flex">
          <Link href="/">
            <ListItem as="a" px={3} cursor="pointer">
              home
            </ListItem>
          </Link>
          <Link href="/contact">
            <ListItem as="a" px={3} cursor="pointer">
              contact
            </ListItem>
          </Link>
        </List>

        <Spacer />

        <List display="flex" alignItems="center">
          <ListItem px={3}>
            <DarkModeSwitch />
          </ListItem>
          <Link href="/cart">
            <ListItem as="a" px={3} cursor="pointer">
              <Icon as={FaShoppingCart} />
            </ListItem>
          </Link>
          <Link href="/">
            <ListItem as="a" pl={3} cursor="pointer" onClick={onOpen}>
              <Icon as={FaUserAlt} />
            </ListItem>
          </Link>
        </List>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>Login</ModalHeader>
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input type="email" id="email" placeholder="E-mail" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3}>
              Go
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
