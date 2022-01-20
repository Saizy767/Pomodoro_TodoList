import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu';
import TodoList from './pages/ToDoList/ToDoList';
import SetTime from './pages/SetTime/SetTime';
import Work from './pages/Work/Work';
import Relax from './pages/Break/Break';
import End from './pages/Complete/Complete';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/todo' element={<TodoList/>}/>
        <Route path='/settime' element={<SetTime/>}/>
        <Route path='/worktime' element={<Work/>}/>
        <Route path='/breaktime' element={<Relax/>}/>
        <Route path='/complete' element={<End/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
