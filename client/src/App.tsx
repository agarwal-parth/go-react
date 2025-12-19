import { Container, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:8000/api" : "/api";
function App() {

  return (
    <Stack h='100vh'align={'center'}>
      <Navbar/>
      <Container>
        <TodoForm/>
        <TodoList/>
        {/* <Button colorScheme='teal'>Chakra Button</Button> */}
      </Container>
    </Stack>
  )
}

export default App
