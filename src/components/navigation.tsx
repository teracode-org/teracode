import { Box, Text } from '@chakra-ui/react'


function Navigation() {
  return (
    <Box
        h='60px'
        w='100%'
        gap='20px'
        display='flex'
        flexDirection='row'
        textAlign='center'
    >
        <Text color='#19181F' fontSize='sm' fontWeight='400' m='10px auto'>{"Beginner > 1. Moving the Turtle"}</Text>
    </Box>
  )
}

export default Navigation;
