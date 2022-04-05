import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Graps from './Component/Grapes/Graps';
import Home from './Component/Home/Home';
import Nav from './Component/Nabvar/Nav';
import Notfound from './Component/Notfound/Notfound';
import Reviews from './Component/Reviews/Reviews.js';

function App() {
  return (
    <div>
      {/* This is navigation var it is stick */}
      <Nav></Nav>
      {/* This is Router To route all pages */}
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/reviews' element={<Reviews/>}/>
       <Route path='/graps' element={<Graps/>}/>
       <Route path='/blogs' element={<Blogs/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='*' element={<Notfound/>}/>
     </Routes>
    </div>
  );
}

export default App;
