import { ChakraProvider } from '@chakra-ui/react'
import LessonPage from './pages/Lesson';


function App() {
  return (
    <ChakraProvider>
      <LessonPage />
    </ChakraProvider>
  )
}

export default App;
