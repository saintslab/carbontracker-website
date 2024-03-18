import { Text, Box, Button, Flex, HStack, Switch, useColorMode } from "@chakra-ui/react"

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex maxH={50} w='full' justify='flex-end'>
           <HStack justify='center'>
             <Text>Dark mode</Text>
            <Switch onChange={toggleColorMode} isChecked={colorMode == 'dark'} />
          </HStack>
        </Flex>
  )
}
