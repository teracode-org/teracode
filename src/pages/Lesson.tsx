import { Box } from '@chakra-ui/react'
import Navigation from '../components/Navigation';
import CodeEditor from '../components/CodeEditor';


function LessonPage() {
  return (
    <Box bg='rgb(239,240,243)' h='100vh' w='100vw' display='flex' flexDirection='column'>
      <Navigation folder="Beginner" lesson="1. Hello World" />
      <Box bg='white' flex='1' borderRadius='20px' m='20px' display='flex' flexDirection='row' overflow='hidden'>
        <Box flex='2.5' height='100%' bg='green'>
          
        </Box>
        <Box flex='5' height='100%' bg='red'>
          
        </Box>
        <Box flex='2.5' height='100%'>
          <CodeEditor />
        </Box>
      </Box>
    </Box>
  )
}

export default LessonPage;
