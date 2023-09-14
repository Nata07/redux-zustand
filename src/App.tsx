import {Provider as ReduxProvider} from 'react-redux'
import { AddTodo } from "./Components/AddTodo";
import { TodoList } from "./Components/TodoList";
import { store } from './store';

export function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  )
}
