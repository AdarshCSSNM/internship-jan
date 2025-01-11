// import File from './File';
// import Demo from './Demo';
// import Test1 from './Test1';
// import { RxAvatar } from "react-icons/rx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Blogs" element={<Blogs/>}/>
        </Routes>
      </BrowserRouter>
    {/* <File/> */}
     {/* <Demo/> */}
    {/* <Test1/> */}
    </div>
  )
}

export default App;
