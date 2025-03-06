import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Admissions from './Components/Admissions';
import Academics from './Components/Academics.jsx';
import Faculties from './Components/Faculties';
import Campus from './Components/Campus.jsx';
import News from './Components/News.jsx'
import Gallery from './Components/Gallery.jsx';
import Contact from './Components/Contact.jsx'
import Faqs from './Components/Faqs.jsx';




function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' Component={Homepage}/>
      <Route exact path='/Home' Component={Home}/>
      <Route exact path='/About' Component={About}/>
      <Route exact path='/Academics' Component={Academics}/>
      <Route exact path='/Faculties' Component={Faculties}/>
      <Route exact path='/Campus' Component={Campus}/>
      <Route exact path='/News' Component={News}/>
      <Route exact path='/Gallery' Component={Gallery}/>
      <Route exact path='/Contact' Component={Contact}/>
      </Routes>
 
    </div>
  );
}

export default App;
