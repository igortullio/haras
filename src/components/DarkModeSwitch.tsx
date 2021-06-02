import { useColorMode, Icon } from '@chakra-ui/react'
import { FaLightbulb } from 'react-icons/fa'

export const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode()

  return <Icon as={FaLightbulb} onClick={toggleColorMode} cursor="pointer" />
}
