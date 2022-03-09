import "./App.css";

import { Todo } from "./components/Todo";

function App() {
  // const [counter,setCounter] = useState()

  // const getData = (data)=>{
  //   console.log("Recieved from child:",data)
  //   setCounter(data)
  // }
  return (
    <div className="App">
      {/* <Left fn ={getData}/> */}
      {/* <Right data = {counter}/> */}
      <Todo />
    </div>
  );
}

//  function Left({fn}){
//    const counter = 10
//    fn(counter)
//    return <div>Left Value</div>
//  }
//  function Right({data}){
//    return <div>Right:{data}</div>

//  }

export default App;
