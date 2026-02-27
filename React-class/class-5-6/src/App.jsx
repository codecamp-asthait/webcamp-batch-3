import './App.css'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import { ThemeContext } from './themeContext'
import ThemeProvider from './ThemeProvider'
import UserRefExample from './UserRefExample'
import UseRefSecondUseCase from './UseRefSecondUseCase'
import CatFriends from './UseRefPracticeOne'
import Counter from './Counter'
import Timer from './Timer'
import UserList from './UserList'
import CodeSplitingLazyLoading from './CodeSplitingLazyLoading'

function App() {
  

  return (
    <>
      <ThemeProvider>
          {/* <Counter/> */}
          {/* <Timer/> */}
          <UserList/>
          <CodeSplitingLazyLoading/>
          {/* <UseRefSecondUseCase/>
          <CatFriends/> */}
      </ThemeProvider>
    </>
  )
}


export default App
