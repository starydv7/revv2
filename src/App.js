
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage';
import Navbar from './components/Navbar';
import PuppyPages from "./components/PuppyPage";
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/puppy" element={<PuppyPages />}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
