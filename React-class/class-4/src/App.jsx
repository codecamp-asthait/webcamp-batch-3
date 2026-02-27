import { useContext, useReducer } from 'react'
import './App.css'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import { taskReducer } from './taskReducer'
import { ThemeContext } from './themeContext'
import ThemeProvider from './ThemeProvider'

function App() {
  
  // const [taskList, setTaskList] = useState([]);
  const [taskList, dispatch] = useReducer(taskReducer , []);
  // const {  themeDispatch } = useContext(ThemeContext);
  // console.log("theme" , theme);
  const handleAddTask = (inputValue) =>{
  //  setTaskList([...taskList, {
  //   id: taskList.length + 1,
  //   title: inputValue,
  //   createdAt: new Date()
  //  }]);
    dispatch({ type: "ADD_TASK", title: inputValue });
  }

  const handleEditTask = (id , newTitle) =>{
    // const task = taskList.find((task)=> task.id === id);
    // if (task) {
    //   task.title = newTitle;
    //   setTaskList([...taskList]);
    // }
    dispatch({ type: "EDIT_TASK", id, newTitle });
  }

  const handleDeleteTask = (id) =>{
    // const updateTaskList = taskList.filter((task)=> task.id !== id);
    // setTaskList(updateTaskList);
    dispatch({ type: "DELETE_TASK", id });

  }

  return (
    <>
    {/* <ThemeContext.Provider value={"light"}>
      <div className={`App ${theme}`}>
        <h1>Task List</h1>
      </div>
    </ThemeContext.Provider> */}
    <ThemeProvider>
           <AddTaskForm handleAddTask={handleAddTask}/>
          <TaskList taskList={taskList} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />
    </ThemeProvider>
    </>
  )
}


export default App
