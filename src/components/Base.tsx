import { Flex } from '@chakra-ui/react'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export type BaseProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseProps) => (
  <Flex flexDirection="column" maxWidth="1140px" h="100vh" justifyContent="space-between" margin="0 auto">
    <Header />
    {children}
    <Footer />
  </Flex>
)
