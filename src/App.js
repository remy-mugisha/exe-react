import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';

function App() {
  return (
    <Router>
    <div>
    <Routes> 
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='*' element={<> <h1>404</h1> </>}/>
          </ Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
