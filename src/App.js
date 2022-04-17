import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import PracticeArea from './Components/PracticeArea/PracticeArea';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='practice-area' element={<PracticeArea></PracticeArea>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
