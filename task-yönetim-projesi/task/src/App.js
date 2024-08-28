import { AddTask } from '@mui/icons-material';
import './App.css';
import CreateTask from './Components/CreateTask';
import Header from './Components/Header';

function App() {
  const AddTask=(newTask)=>{
    debugger;
    console.log(newTask);
  }
  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={AddTask} />

    </div>
  );
}

export default App;
