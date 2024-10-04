import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react'


interface NavigationProps {
  folder: string,
  lesson: string,
}


function Navigation({folder, lesson}: NavigationProps) {
  return (
    <Box
        h='60px'
        w='100%'
        gap='20px'
        display='flex'
        flexDirection='row'
        textAlign='center'
    >
        <Text color='#19181F' fontSize='sm' fontWeight='400' m='10px auto'>
          {folder}
          <ChevronRightIcon m="0px 5px 3px 5px"/>
          {lesson}
        </Text>
    </Box>
  )
}

export default Navigation;
