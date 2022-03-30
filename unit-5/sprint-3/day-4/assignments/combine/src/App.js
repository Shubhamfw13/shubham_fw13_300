import './App.css';
import { Counter } from './Components/CounterInput';
import { TodoInput } from './Components/TodoInput';
import{TodoList} from './Components/TodoList'

function App() {
  return (
    <div className="App">
      <Counter/><br/><hr/>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}
export default App;
