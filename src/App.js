import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import CreateStudent from './components/CreateStudent'
import StudentList from './components/StudentList'
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element=""></Route>
          <Route path="/create-student" element={<CreateStudent/>}></Route>
          <Route path="/student-list" element={<StudentList/>}></Route>
          <Route path="/edit-student/:id" element={<EditStudent/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
