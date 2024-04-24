// import logo from './logo.svg';
import './App.css';
// import ListData from './components/ListData';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/cart" exact element={<Cart/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
