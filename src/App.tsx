import { ChakraProvider } from '@chakra-ui/react'
import LessonPage from './pages/lesson';


function App() {
  return (
    <ChakraProvider>
      <LessonPage />
    </ChakraProvider>
  )
}

export default App;
