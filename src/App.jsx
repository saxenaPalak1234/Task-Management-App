import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home/Home'
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/pages/AddTodo/AddTodo'
import EditTodo from "./components/pages/EditTodo/EditTodo";
import { Toaster } from 'react-hot-toast';




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path ='/todo' element={ <TodoList /> } />
    <Route path ='edittodo/:id/:task' element={<EditTodo />} />
    <Route path='/addtodo' element={<AddTodo/>} />
   </Routes>
   <Toaster />
   </BrowserRouter>
  )
}

export default App